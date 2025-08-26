const { Router } = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userMiddleware = require("../middleware/user");
dotenv.config();

const jwtPassword = process.env.JWT_USER_PASSWORD;

const userRouter = Router();

userRouter.post("/register", function (req, res) {});

module.exports = {
  userRouter,
};
