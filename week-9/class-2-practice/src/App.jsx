import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [counterVisble, setCounterVisibe] = useState(true);
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  function decrementCounter() {
    setCount(count - 1);
  }

  function resetCounter() {
    setCount(0);
  }

  useEffect(function () {
    console.log("On mount");
    let clock1 = setInterval(function () {
      setCount((count) => count + 1);
    }, 1000);

    let clock = setInterval(() => {
      setCounterVisibe((c) => !c);
    }, 5000);

    return function () {
      console.log("on unmount");
      clearInterval(clock);
      clearInterval(clock1);
    };
  }, []);

  return (
    <div>
      Hi there
      {counterVisble && (
        <Counter
          count={count}
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
          resetCounter={resetCounter}
        ></Counter>
      )}
    </div>
  );
}

function Counter(props) {
  // hooking into the lifecycle event in react - on mount

  // this is the role of the dependency array
  useEffect(
    function () {
      console.log("The count value is changed");
    },
    [props.count]
  );
  return (
    <div>
      <h2>Counter : {props.count}</h2>
      <br />
      <button onClick={props.incrementCounter}>Increase</button>{" "}
      &nbsp;&nbsp;&nbsp;
      <button onClick={props.decrementCounter}>Decrease</button>{" "}
      &nbsp;&nbsp;&nbsp;
      <button onClick={props.resetCounter}>Reset</button>
    </div>
  );
}

export default App;
