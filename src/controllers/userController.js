const { addUser } = require("../services/userService");
const { validatePassword } = require("../utils/validators");

const createUser = async (req, res) => {
  const { firstName, lastName, emailId, password, age, gender } = req.body;

  try {
    if (!validatePassword(password)) {
      return res.status(400).json({
        message: "Weak password. Password must contain upper, lower, number, special character and min 6 chars.",
      });
    }

    const userObj = { firstName, lastName, emailId, password, age, gender };

    const userData = await addUser(userObj);

    return res.status(201).json({
      userId: userData._id,
      message: "User created successfully",
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "Email already exists" });
    }

    if (error.name === "ValidationError" && error.errors.emailId) {
      return res.status(422).json({ message: error.errors.emailId.message });
    }

    if (error.name === "ValidationError" && error.errors.age) {
      return res.status(422).json({ message: error.errors.age.message });
    }

    console.error("Create User Error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createUser };
