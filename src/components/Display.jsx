import React from "react";
import Keypad from "./Keypad";

const Display = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="screen">
          <input type="text" className="display" placeholder="0" />
        </div>
        <Keypad />
      </div>
    </div>
  );
};

export default Display;
