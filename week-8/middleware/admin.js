const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const jwtPassword = process.env.JWT_ADMIN_PASSWORD;

function adminMiddleware(req, res, next) {}

module.exports = {
  adminMiddleware,
};
