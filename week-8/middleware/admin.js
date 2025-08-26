const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const jwtPassword = process.env.JWT_ADMIN_PASSWORD;

function adminMiddleware(req, res, next) {
  const token = req.headers.Authorization;

  const response = jwt.verify(token, jwtPassword);

  if (response) {
    req.id = response.id;
    next();
  } else {
    res.status(401).json({
      error: "Unauthorized",
    });
  }
}

module.exports = {
  adminMiddleware,
};
