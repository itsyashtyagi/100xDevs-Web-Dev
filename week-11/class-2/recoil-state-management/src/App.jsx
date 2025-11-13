import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { counterAtom, evenSelector } from "./store/atoms/counter";

function App() {
  return (
    <RecoilRoot>
      <Buttons />
      <Count />
      <IsEven />
    </RecoilRoot>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 2)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}

function Count() {
  const count = useRecoilValue(counterAtom);

  return <div>{count}</div>;
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector);

  return <div>{isEven ? "Even" : "Odd"}</div>;
}

function Counter() {
  return (
    <div>
      <CurrentCount />
      <br />
      <Increase />
      <br />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  // const count = useRecoilValue(counterAtom);
  const countValue = useRecoilValue(counterAtom);

  return <div>hi there {countValue}</div>;
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  return <button onClick={() => setCount((c) => c + 1)}>Increase</button>;
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);

  return <button onClick={() => setCount((c) => c - 1)}>Decrease</button>;
}

export default App;
