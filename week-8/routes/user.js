const { Router } = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const userMiddleware = require("../middleware/user");
const { UserModel } = require("../db");
dotenv.config();

const jwtPassword = process.env.JWT_USER_PASSWORD;

const userRouter = Router();

userRouter.post("/register", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  const hashedPassword = await bcrypt.hash(password, 5);

  const requiredBody = z.object({
    name: z.string(),
    email: z.string().email("The email is not valid"),
    phone: z.number(),
    password: z.string(),
  });

  const parsedDataWithSucess = requiredBody.safeParse(req.body);

  if (!parsedDataWithSucess.success) {
    res.status(403).json({
      message: parsedDataWithSucess.error._zod.def[0],
    });
    return;
  }

  try {
    await UserModel.create({
      name: name,
      email: email,
      phone: phone,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User Account Created Successfully",
    });
  } catch (err) {
    console.log(`The Error is : ${err}`);
    res.status(403).json({
      error: err,
    });
  }
});

userRouter.post("/login", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const requiredBody = z.object({
    email: z.string().email("Please enter the valied email"),
    password: z.string(),
  });

  const parsedDataWithSucess = requiredBody.safeParse(req.body);

  if (!parsedDataWithSucess.success) {
    res.status(403).json({
      message: parsedDataWithSucess.error._zod.def[0].message,
    });
    return;
  }

  try {
    const response = await UserModel.findOne({
      email,
    });

    if (response) {
      const passwordCheck = await bcrypt.compare(password, response.password);

      if (passwordCheck) {
        const token = await jwt.sign(
          {
            id: response._id,
          },
          jwtPassword
        );

        res.status(200).json({
          message: "Login Successfully",
          token: token,
        });
      } else {
        res.status(403).json({
          message: "Wrong password",
        });
      }
    } else {
      res.status(403).json({
        message: "No such user found in our database, Please register first",
      });
    }
  } catch (err) {
    console.log(`The Error is : ${err}`);
  }
});

module.exports = {
  userRouter,
};
