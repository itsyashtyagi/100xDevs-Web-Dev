const jwt = require("jsonwebtoken");
const JWT_SECRET = "yashtyagijsonsecretkeymongodb";

export function auth(req, res, next) {
  const token = req.headers.authorization;

  const response = jwt.verify(token, JWT_SECRET);

  if (response) {
    res.userId = response.userId;
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
}
