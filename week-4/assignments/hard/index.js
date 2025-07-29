const express = require("express");
const todo = require("./routes/todo");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", todo);

app.listen(port, function () {
  console.log("server is running at port" + port);
});
