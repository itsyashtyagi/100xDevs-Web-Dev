const express = require("express");

const app = express();

app.get("/sum/:a/:b", function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.status(200).json({
    ans: a + b,
  });
});

app.get("/multiply/:a/:b", function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.status(200).json({
    ans: a * b,
  });
});

app.get("/divide/:a/:b", function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.status(200).json({
    ans: a / b,
  });
});

app.get("/subtract/:a/:b", function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.status(200).json({
    ans: a - b,
  });
});

app.listen(3001);
