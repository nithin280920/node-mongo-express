const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const addUser = async (userObject) => {
  try {
    userObject.password = await bcrypt.hash(userObject.password, 10);
    const userData = await User.create(userObject);
    return userData;
  } catch (error) {
    throw error;
  }
};

module.exports = { addUser };
