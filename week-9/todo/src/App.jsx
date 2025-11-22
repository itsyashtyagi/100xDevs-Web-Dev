import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const taskTitle = useRef("");
  const taskDescription = useRef("");

  function createTask() {
    setTasks([
      ...tasks,
      {
        title: taskTitle.current.value,
        description: taskDescription.current.value,
      },
    ]);
  }

  function deleteTask(index) {
    var clonedTaks = [...tasks];

    clonedTaks.splice(index, 1);

    setTasks(clonedTaks);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeaderComponent />
        <div>
          Title : <input placeholder="text"></input>
          <br />
          <br />
          Description : <textarea placeholder="text"></textarea>
        </div>
        <br />
        <div>
          <button onClick={AddTodo}>Add Todo</button>
        </div>
        <br />
        <div>
          {todos.map(
            (todo, index) =>
              `${index + 1} : ${todo.title} -- ${todo.description}`
          )}
        </div>
      </div>
    </>
  );
}

function HeaderComponent() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid black",
        borderRadius: "8px",
        margin: "20px",
        marginBottom: "50px",
        padding: "15px",
        width: "fit-content",
      }}
    >
      Todo Application
    </div>
  );
}

export default App;
