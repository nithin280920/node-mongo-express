require("dotenv").config();
require("./config/database");
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/database");

const { authenticate, authorization } = require("./middleware/authMiddleware");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/admin", authenticate, authorization(["admin"]));
app.use("/api/v1", require("./routers/index"));

app.use("/", (err, req, res, next) => {
  if (err) {
    console.log("Internal server error: ", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Error in connecting DB: ", err);
  });
