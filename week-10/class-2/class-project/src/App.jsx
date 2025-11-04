import { createContext, useContext, useState } from "react";
import "./App.css";

const BulbContext = createContext();

export function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <BulbContext.Provider
      value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <>
      <BulbProvider>
        <LightBulb />
      </BulbProvider>
    </>
  );
}

function LightBulb() {
  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  );
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Bulb is On" : "Bulb is Off"}</div>;
}

function ToggleBulbState() {
  const { setBulbOn } = useContext(BulbContext);
  function ToggleBulb() {
    // setBulbOn(!bulbOn);
    setBulbOn((currentState) => !currentState);
  }
  return (
    <div>
      <button onClick={ToggleBulb}>Toogle the Bulb</button>
    </div>
  );
}
export default App;
