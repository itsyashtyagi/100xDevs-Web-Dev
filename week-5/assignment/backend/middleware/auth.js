const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const jwtToken = process.env.JWT_SECRET;

const users = [];

function authMiddleware(req, res, next) {
  const token = req.headers.token;

  const decodedValue = jwt.verify(token, jwtToken);

  const user = users.find((e) => e.email === decodedValue.email);

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
}

module.exports = authMiddleware;
