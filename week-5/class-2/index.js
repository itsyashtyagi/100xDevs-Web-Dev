const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
// app.use(cors());

// app.use(express.json());

app.post("/data", function (req, res) {
  const requestBody = req.body;
  console.log(`The requested body is ${requestBody}`);

  res.status(200).json({
    data: requestBody,
  });
});

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.status(200).json({
    ans: a + b,
  });
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// try to use the body-parse package instead of the express.json()

app.listen(3000);

// we did not need the cors if the frontend and the backend are hosted on the same server
