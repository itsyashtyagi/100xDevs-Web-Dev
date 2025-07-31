const { Router } = require("express");
const authMiddleware = require("../middleware/user");
const todoList = require("../database/db");
const router = Router();

let id = 1;

router.use(function (req, res, next) {
  id++;
  next();
});

// This will fetch all the todo list
router.get("/", function (req, res) {
  res.status(200).json(todoList);
  res.status(200).json({
    message: "Hi there",
  });
});

router.use(authMiddleware);

// This will add the todo in the list
router.post("/", function (req, res) {
  const title = req.body.title;
  if (title != null) {
    todoList.push({
      id,
      title,
    });

    res.status(200).json({
      message: "Todo Added successfully",
    });
  } else {
    res.status(403).json({
      error: "Pls add the todo item also",
    });
  }
});

// This will delete the specific todo with the help of its id
router.delete("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  let done;
  todoList.forEach((todo, index) => {
    if (todo.id === id) {
      todoList.splice(index, 1);
      done = true;
    }
  });

  if (done) {
    res.status(200).json({
      message: "The todo has been deleted successfully",
    });
  } else {
    res.status(403).json({
      error: "No todo found with this id",
    });
  }
});

//This will update the specfic todo
router.put("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const title = req.body.title;
  let done;

  todoList.forEach((todo, index) => {
    if (todo.id === id) {
      todoList.splice(index, 1, {
        id,
        title,
      });
      done = true;
    }
  });
  if (done) {
    res.status(200).json({
      message: "The todo has been successfully modified",
    });
  } else {
    res.status(403).json({
      error: "We are unable to find the todo for that particular id",
    });
  }
});

// This will fetch the details of the specific todo
router.get("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  // let todo;
  // todoList.forEach((value) => {
  //   console.log("Inside the forEcah function");
  //   console.log(value.id);
  //   console.log(id);
  //   if (value.id === id) {
  //     console.log(value.id);
  //     todo = value;
  //   }
  // });

  const todo = todoList.filter((el) => el.id === id);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(200).json({
      message: "No able to found with this id",
    });
  }
});

//This will delete the all todo list
router.delete("/", function (req, res) {
  todoList.splice(0, todoList.length);
  res.status(200).json({
    message: "Todo List all elements deleted successfully",
  });
});

module.exports = router;
