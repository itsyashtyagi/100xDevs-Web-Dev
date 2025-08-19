const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const auth = require("./auth");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
const bcrypt = require("bcrypt");
const { z } = require("zod");

const JWT_SECRET = "yashtyagijsonsecretkeymongodb";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup", async function (req, res) {
  const requiredBody = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
  });

  const parsedDataWithSucess = requiredBody.safeParse(req.body);

  if (!parsedDataWithSucess.success) {
    res.status(403).json({
      message: "Incorrect format",
      error: parsedDataWithSucess.error,
    });
    return;
  }

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(User.password, 10);

  try {
    await UserModel.create({
      name: User.name,
      email: User.email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "The new user has been created successfully",
    });
  } catch (error) {
    res.status(403).json({
      error,
    });
  }
});

app.post("/login", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  console.log(password);

  try {
    const response = await UserModel.findOne({
      email: email,
    });

    const match = await bcrypt.compare(password, response.password);
    console.log(match);

    if (match && response) {
      const token = await jwt.sign(
        {
          id: response._id.toString(),
        },
        JWT_SECRET
      );

      res.status(200).json({
        message: "The user is done successfully",
        token: token,
      });
    } else {
      res.status(403).json({
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    res.status(403).json({
      error,
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

app.listen(3000, async function () {
  try {
    await mongoose.connect(
      "mongodb+srv://yashtyagi8006:4FwmdvurdkTCJFJh@cluster0.wsmlzzn.mongodb.net/todo-app"
    );
    console.log("The server is started at the port 3000");
  } catch (error) {
    console.log("The app is crashed");
  }
});
