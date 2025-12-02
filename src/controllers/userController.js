const { addUser } = require("../services/userService");

const createUser = async (req, res) => {
  const { firstName, lastName, emailId, password, age, gender } = req.body;
  try {
    const userObj = { firstName, lastName, emailId, password, age, gender };
    const userData = await addUser(userObj);
    if (!userData) {
      res.status(404).json({ message: "User creation failed" });
    }
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createUser };
