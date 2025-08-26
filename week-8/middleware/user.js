const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
process.config();

const jwtPassword = process.env.JWT_USER_PASSWORD;

function userMiddleware(req, res, next) {}

module.exports = {
  userMiddleware,
};
