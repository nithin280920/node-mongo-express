const mongoose = require("mongoose");
const { Schema } = mongoose;
const { validateEmail, validatePassword } = require("../utils/validators");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
      validate: [validateEmail, "Invalid email format"],
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    age: {
      type: Number,
      min: 1,
      max: 120,
    },

    gender: {
      type: String,
      default: "M",
      enum: ["M", "F", "O"],
      uppercase: true,
    },
  },
  { timestamps: true }
);

userSchema.index({ emailId: 1 }, { unique: true });

module.exports = mongoose.model("User", userSchema);
