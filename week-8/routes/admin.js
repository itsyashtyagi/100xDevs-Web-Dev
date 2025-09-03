const { Router } = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { adminMiddleware } = require("../middleware/admin");
dotenv.config();

const jwtPassword = process.env.JWT_ADMIN_PASSWORD;

const adminRouter = Router();

// admin register route
adminRouter.post("/register", function (req, res) {});

// admin login route
adminRouter.post("/login", function (req, res) {});

// fetch all the courses posted by the admin

// add the new course

module.exports = {
  adminRouter,
};
