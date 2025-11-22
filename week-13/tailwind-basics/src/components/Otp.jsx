import { useRef, useState } from "react";
import { Button } from "./Button";

export const Otp = ({ number }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const ref = useRef(Array(number).fill(0));

  return (
    <div>
      {Array(number)
        .fill(1)
        .map((x, index) => (
          <SubOtpBox
            reference={(e) => (ref.current[index] = e)}
            key={index}
            onDone={() => {
              if (index + 1 >= number) {
                setButtonDisabled((e) => !e);
                return;
              }
              ref.current[index + 1].focus();
            }}
            onBack={() => {
              if (index == 0) {
                return;
              }
              ref.current[index - 1].focus();
            }}
          />
        ))}
      <br />
      <br />
      <Button disabled={buttonDisabled} onClick={() => {}}>
        Verify Otp
      </Button>
    </div>
  );
};

function SubOtpBox({ reference, onDone, onBack }) {
  const [inputBoxValue, setInputBoxValue] = useState("");

  return (
    <input
      ref={reference}
      type="text"
      value={inputBoxValue}
      onChange={(e) => {
        const val = e.target.value;
        if (val === "") {
          setInputBoxValue("");
          onBack();
        } else if (
          val === "1" ||
          val === "2" ||
          val === "3" ||
          val === "4" ||
          val === "5" ||
          val === "6" ||
          val === "7" ||
          val === "8" ||
          val === "9"
        ) {
          setInputBoxValue(val);
          onDone();
          console.log(e);
        }
      }}
      className="bg-blue-500 rounded-xl w-[40px] h-[50px] m-1 outline-none px-4 text-white"
    />
  );
}
