const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;
const jwtToken = process.env.JWT_SECRET;

const users = [];

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/register", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  if (users.find((e) => e.email === email)) {
    res.status(403).json({
      error: "The email is already regsitered",
    });
    return;
  }

  users.push({
    email,
    password,
  });

  res.status(201).json({
    message: "User registered successfully",
  });
});

app.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = users.find((e) => e.email === email && e.password === password);

  if (user) {
    const token = jwt.sign(
      {
        email: user.email,
      },
      jwtToken
    );

    res.header("token", token);
    res.cookie("token", token);

    res.status(200).json({
      token,
    });
  } else {
    res.status(403).json({
      error: "Invalid credentails",
    });
  }
});

function authMiddleware(req, res, next) {
  const token = req.headers.token;

  const decodedToken = jwt.verify(token, jwtToken);

  console.log(decodedToken.email);

  const user = users.find((e) => e.email === decodedToken.email);

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(403).json({
      error: "Invalid token",
    });
  }
}

function auth(req, res, next) {
  const token = req.headers.token;

  if (token) {
    jwt.verify(token, jwtToken, (err, decoded) => {
      if (err) {
        res.status(401).send({
          message: "Unauthorized",
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
}
app.get("/me", authMiddleware, function (req, res) {
  const user = req.user;

  res.status(200).json({
    email: user.email,
    password: user.password,
  });
});

app.listen(port, function () {
  console.log(`The server is running at port ${port}`);
});
