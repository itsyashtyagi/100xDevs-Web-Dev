const express = require("express");
const cors = require("cors");
const dotenv = require("dotev");
const authRouter = require("./routes/auth");
const todoRouter = require("./routes/todo");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api", authRouter);
app.use("/api", todoRouter);

app.listen(port, function () {
  console.log(`The Backend server is running at port ${port}`);
});
