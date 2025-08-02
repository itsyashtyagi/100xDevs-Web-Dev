const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const jsonwebtoken = require("jsonwebtoken");
dotenv.config();

const app = express();
const port = process.env.PORT;
const jwtkey = process.env.JWT_SECRET;

app.use(express.json());
app.use(cors());

let users = [];

app.post("/register", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((e) => e.username === username)) {
    res.status(403).json({
      error: "The user is already exists in our system with this name",
    });
    return;
  }

  if (username === "" || username === null) {
    res.status(403).json({
      error: "The username is not valid",
    });
    return;
  }

  if (password === "" || password === null) {
    res.status(403).json({
      error: "The password is not valid",
    });

    return;
  }

  users.push({
    username,
    password,
  });

  res.status(200).json({
    message: "New User registered successfully",
  });
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (e) => e.username === username && e.password === password
  );

  if (user) {
    const token = jsonwebtoken.sign(
      {
        username: user.username,
      },
      jwtkey
    );

    res.status(200).json({
      token,
    });
  } else {
    res.status(403).json({
      error: "Invalid credentails",
    });
  }
});

app.get("/me", function (req, res) {
  const token = req.headers.authorization;

  const user = jsonwebtoken.verify(token, jwtkey);
  const userData = users.find((e) => e.username === user.username);
  console.log(userData.password);
  console.log(userData.username);
  if (userData) {
    res.status(200).json({
      username: userData.username,
      password: userData.password,
    });
  } else {
    res.status(401).json({
      error: "Invalid token",
    });
  }
});

app.listen(port, function () {
  console.log(`The server is running at port : ${port}`);
});
