const User = require("../models/userModel");

const addUser = async (userObject) => {
  try {
    const userData = await User.create(userObject);
    return userData;
  } catch (error) {
    throw new Error("Error in creating database: ", error);
  }
};

module.exports = { addUser };
