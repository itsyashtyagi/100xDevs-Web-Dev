const { Router } = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const authRouter = Router();

const users = [];

const jwtToken = process.env.JWT_SECRET;

authRouter.post("/register", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  if (users.find((e) => e.email === email)) {
    res.status(403).json({
      message: "The user is already registered with this Email",
    });
    return;
  }

  users.push({
    email,
    password,
  });

  res.status(201).json({
    message: "The user registered successfully",
  });
});

authRouter.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = users.find((e) => e.email === email && e.password === password);

  if (user) {
    const token = jwt.sign(
      {
        email,
      },
      jwtToken
    );

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } else {
    res.status(403).json({
      message: "Invalid credentails",
    });
  }
});

authRouter.get("/logout", function (req, res) {
  res.status(200).json({
    message: "User Logout Successfully",
  });
});

module.exports = authRouter;
