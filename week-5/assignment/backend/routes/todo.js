const { Router } = require("express");
const authMiddleare = require("../middleware/auth");
const todoRouter = Router();

const todos = [];
let id = 1;

todoRouter.use(authMiddleare);

function idIncrementer(req, res, next) {
  id++;
  next();
}

// to get all the todos
todoRouter.get("/todo", function (req, res) {
  res.status(200).json({
    todos,
  });
});

// to get the specific todo
todoRouter.get("/todo:id", function (req, res) {
  const id = parseInt(req.params.id);

  const todo = todos.find((e) => e.id === id);

  if (todo) {
    res.status(200).json({
      todo,
    });
  } else {
    res.status(403).json({
      message: "Invalid id, No todo found with this id",
    });
  }
});

// to add the new todo
todoRouter.post("/todo", idIncrementer, function (req, res) {
  const title = req.body.title;

  if (title === "" || title === undefined || title === null) {
    res.status(403).json({
      message: "Enter the valid todo",
    });
    return;
  }

  todos.push({
    id,
    title,
  });

  res.status(200).json({
    message: "New Todo added successfully",
  });
});

// to upadte the specific todo
todoRouter.put("/todo:id", function (req, res) {
  const id = req.params.id;
  const title = req.body.title;

  const todo = todos.find((e) => e.id === id);
  if (todo) {
    const todoIndex = todos.findIndex((e) => e.id === todo.id);
    todos.splice(todoIndex, 1, {
      id,
      title,
    });
    res.status(200).json({
      message: "Todo upadted successfully",
    });
  } else {
    res.status(403).json({
      message: "Invalid todo id, No such todo found in our database",
    });
  }
});

// to delete all the todos
todoRouter.delete("/todo", function (req, res) {
  todos.splice(0, todos.length);
  res.status(200).json({
    message: "All todo deleted successfully",
  });
});

// to delete the specific todos
todoRouter.delete("/todo:id", function (req, res) {
  const id = parseInt(req.params.id);
  const todo = todos.find((e) => e.id === id);

  if (todo) {
    const todoIndex = todos.findIndex((e) => e.id === todo.id);
    todos.splice(todoIndex, 1);
    res.status(200).json({
      message: "Todo has been deleted successfully",
    });
  } else {
    res.status(403).json({
      message: "Invalid todo id, No such todo found in our database",
    });
  }
});

module.exports = todoRouter;
