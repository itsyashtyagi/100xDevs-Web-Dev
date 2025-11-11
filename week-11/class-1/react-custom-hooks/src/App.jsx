import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { usePrev, usePrevAlternate } from "./hooks/usePrev";
import { useIsOnline } from "./hooks/useIsOnline";
import { useDebounce } from "./hooks/useDebounce";

function useCounter() {
  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount(count + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount,
  };
}

// function App() {
//   const { count, increaseCount } = useCounter();
//   const { post, loading } = useFetch(
//     `https://jsonplaceholder.typicode.com/posts/${count}`
//   );

//   if (loading) {
//     return <div>Loading....</div>;
//   }

//   return (
//     <div>
//       <button onClick={increaseCount}>Counter {count}</button>
//       <br />
//       <div>{JSON.stringify(post)}</div>
//     </div>
//   );
// }

function App() {
  const [state, setState] = useState(0);
  const [count, setCount] = useState(0);
  const value = usePrev(state);
  const alternateValue = usePrevAlternate(state, 0);
  const isOnline = useIsOnline();

  function sendDataToBackend() {
    fetch("api/v1/google.com/serach/...");
  }

  const debounceFn = useDebounce(sendDataToBackend);

  return (
    <div>
      <button onClick={() => setState(state + 1)}>Count {state}</button>
      <br />
      <button onClick={() => setCount((count) => count + 1)}>Update</button>
      <br />
      <div>The previous value from the usePrev hook is {alternateValue}</div>
      <br />
      <div>
        The use is {isOnline ? "The user is online" : "The user is offline"}
      </div>
      <br />
      <input type="text" onChange={() => debounceFn()}></input>
    </div>
  );
}

export default App;
