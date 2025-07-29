function authMiddleware(req, res, next) {
  const token = req.header("token");
  if (token === "123456") {
    next();
  } else {
    res.status(401).json({
      error: "The user is not authozied for this request",
    });
  }
}

module.exports = authMiddleware;
