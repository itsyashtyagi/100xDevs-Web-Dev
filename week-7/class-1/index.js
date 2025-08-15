const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const auth = require("./auth");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");

const JWT_SECRET = "yashtyagijsonsecretkeymongodb";
mongoose.connect(
  "mongodb+srv://gasfgfafa:Aa5jxKhylWdFhv4v@cluster0.7kmvq.mongodb.net/todo-app"
);

const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  await UserModel.create({
    name: name,
    email: email,
    password: password,
  });

  res.status(201).json({
    message: "The new user has been created successfully",
  });
});

app.post("/login", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
    password: password,
  });

  if (response) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );

    res.json(200).json({
      message: "The user is done successfully",
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Invalid Credentials",
    });
  }
});

app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId: userId,
    title: title,
    done: done,
  });

  res.status(201).json({
    message: "The new todo has been created successfully",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId,
  });

  res.status(200).json({
    todos,
  });
});

app.listen(3000, function () {
  console.log("The server is started at the port 3000");
});
