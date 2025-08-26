const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");
dotenv.config();

const app = express();
const port = process.env.PORT;
const mongooseURL = process.env.MONGO_URL;

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.user("/api/v1/course", courseRouter);

async function main() {
  await mongoose
    .connect(mongooseURL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((e) => {
      console.log(`Error while connecting with DB ${e}`);
    });
  app.listen(port);
  console.log("The server is started");
}

main();
