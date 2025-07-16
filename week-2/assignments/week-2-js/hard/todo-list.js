/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todoIndex) {
    this.todos.splice(todoIndex, 1);
  }

  updateTodo(todoIndex, updatedTodo) {
    this.todo.splice(todoIndex, 1, updatedTodo);
  }

  getAllTodo() {
    return this.todos;
  }

  getTodo(todoIndex) {
    return this.todos[todoIndex];
  }

  clearTodo() {
    this.todos = [];
  }
}

const todoObj = new Todo();
todoObj.addTodo("Go to Gym");
console.log(todoObj.getAllTodo());
