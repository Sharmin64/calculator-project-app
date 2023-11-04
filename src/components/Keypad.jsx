import React, {useState} from "react";

const Keypad = () => {
  const [key, setKey] = useState(0);

  const handleClick = (value) => {
    setKey(value);
    console.log("I clicked the button right now!");
  };
  return (
    <div className="keypad">
      <button
        onClick={(key) => {
          handleClick(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          handleClick(key);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          handleClick(key);
        }}
      >
        3
      </button>
    </div>
  );
};

export default Keypad;
