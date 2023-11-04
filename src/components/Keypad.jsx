const Keypad = ({handleClick, clearScreen, calculate}) => {
  return (
    <div className="keypad">
      <div className="first-row">
        <input onClick={clearScreen} type="button" value="C" className="btnA" />
        <input
          onClick={handleClick}
          type="button"
          value="<"
          className="btnA btnfold"
        />
        <input
          onClick={handleClick}
          type="button"
          value="%"
          className="btnA btnfold"
        />
        <input
          onClick={handleClick}
          type="button"
          value="/"
          className="btnA btnP"
        />
      </div>
      <div className="first-row">
        <input
          onClick={handleClick}
          type="button"
          value="7"
          className="btnA btnfold"
        />
        <input
          onClick={handleClick}
          type="button"
          value="8"
          className="btnA btnfold"
        />
        <input
          onClick={handleClick}
          type="button"
          value="9"
          className="btnA btnfold"
        />
        <input
          onClick={handleClick}
          type="button"
          value="*"
          className="btnA btnG"
        />
      </div>
      <div className="first-row">
        <input
          onClick={handleClick}
          type="button"
          value="4"
          className="btnA btnfold"
        />
        <input
          onClick={handleClick}
          type="button"
          value="5"
          className="btnA btnfold"
        />
        <input
          onClick={handleClick}
          type="button"
          value="6"
          className="btnA btnfold"
        />
        <input
          onClick={handleClick}
          type="button"
          value="-"
          className="btnA btnV"
        />
      </div>
      <div className="first-row">
        <input
          onClick={handleClick}
          type="button"
          value="1"
          className="btnA btnfold"
        />
        <input
          onClick={handleClick}
          type="button"
          value="2"
          className="btnA btnfold"
        />
        <input
          onClick={handleClick}
          type="button"
          value="3"
          className="btnA btnfold"
        />
        <input
          onClick={handleClick}
          type="button"
          value="+"
          className="btnA btnF"
        />
      </div>
      <div className="first-row">
        <input
          onClick={handleClick}
          type="button"
          value="0"
          className="btnA btnfold"
        />
        <input
          onClick={handleClick}
          type="button"
          value="00"
          className="btnA btnfold"
        />
        <input
          onClick={handleClick}
          type="button"
          value="."
          className="btnA btnfold"
        />
        <input
          onClick={calculate}
          type="button"
          value="="
          className="btnA btnY"
        />
      </div>
    </div>
  );
};

export default Keypad;
