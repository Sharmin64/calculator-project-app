import React, {useState} from "react";
import Keypad from "./Keypad";

const Display = () => {
  const [keyClick, setKeyClick] = useState(" ");

  const handleClick = (e) => {
    setKeyClick(keyClick.concat(e.target.value));
    console.log("I clicked the button right now!");
  };
  const clearScreen = () => {
    setKeyClick("");
  };
  const calculate = () => {
    setKeyClick(eval(keyClick).toString());
  };
  return (
    <div className="container">
      <div className="main">
        <div className="screen">
          <input
            value={keyClick}
            type="text"
            className="display"
            placeholder="0"
          />
        </div>
        <Keypad
          handleClick={handleClick}
          clearScreen={clearScreen}
          calculate={calculate}
        />
      </div>
    </div>
  );
};

export default Display;
