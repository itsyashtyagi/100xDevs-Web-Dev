const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { adminMiddleware } = require("../middleware/admin");

const courseRouter = Router();

courseRouter.get("/all", function (req, res) {});

module.exports = {
  courseRouter,
};
