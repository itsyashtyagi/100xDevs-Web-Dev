const { Router } = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { adminMiddleware } = require("../middleware/admin");
dotenv.config();

const jwtPassword = process.env.JWT_ADMIN_PASSWORD;

const adminRouter = Router();

adminRouter.post("/register", function (req, res) {});

module.exports = {
  adminRouter,
};
