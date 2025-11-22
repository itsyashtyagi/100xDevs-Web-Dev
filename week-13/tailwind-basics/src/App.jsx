import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Otp } from "./components/Otp";

function App() {
  return (
    <>
      <div className="flex-cols h-screen bg-blue-700  justify-items-center w-screen content-center">
        <Otp number={8}></Otp>
        <br />
        <br />
        <Input placeholder={"Username"} type={"text"}></Input>
        <br />
        <br />
        <Button disabled={false} onClick={() => {}}>
          Signup
        </Button>
      </div>
    </>
  );
}

export default App;
