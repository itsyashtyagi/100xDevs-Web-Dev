const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", function (req, res) {
  res.status(200).json({
    message: "You have successfully started the server",
  });
});

app.listen(3000);
