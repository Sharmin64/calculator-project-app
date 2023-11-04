import React from "react";
import Keypad from "./Keypad";
import Display from "./Display";

const Calculator = () => {
  return (
    <div className="calculator">
      <Display />
      <Keypad />
    </div>
  );
};

export default Calculator;
