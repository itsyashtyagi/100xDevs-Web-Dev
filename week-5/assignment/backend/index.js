const express = require("express");
const cors = require("cors");
const dotenv = require("dotev");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

// app.use("/api", routes);

app.listen(port, function () {
  console.log(`The Backend server is running at port ${port}`);
});
