const { Router } = require("express");
const authMiddleware = require("../middleware/user");
const router = Router();

// This will fetch all the todo list
router.get("/", function (req, res) {
  res.status(200).json({
    message: "Hi there",
  });
});

router.use(authMiddleware);

// This will add the todo in the list
router.post("/", function (req, res) {});

// This will delete the specific todo with the help of its id
router.delete("/:id", function (req, res) {});

//This will update the specfic todo
router.put("/:id", function (req, res) {});

// This will fetch the details of the specific todo
router.get("/:id", function (req, res) {
  const id = req.params.id;
  res.status(200).json({
    id: `The id of the todo is ${id}`,
  });
});

//This will delete the all todo list
router.delete("/", function (req, res) {});

module.exports = router;
