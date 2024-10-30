import React, { useState } from "react";

const Logic = ({ type }) => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleOperation = () => {
    switch (type) {
      case "add":
        var operation = firstNumber + secondNumber;
        setResult(operation);
        break;
      case "subtract":
        var operation = firstNumber - secondNumber;
        setResult(operation);
        break;
      case "multiply":
        var operation = firstNumber * secondNumber;
        setResult(operation);
        break;
      case "divide":
        var operation = firstNumber / secondNumber;
        setResult(operation);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className="result">
        Result: <span>{result}</span>
      </div>

      <h2 className="type">{type}</h2>
      <label>
        first number:
        <input
          type="number"
          onChange={(e) => setFirstNumber(parseInt(e.target.value))}
          name="first_number"
          required
        />
      </label>
      <label>
        second number:
        <input
          type="number"
          onChange={(e) => setSecondNumber(parseInt(e.target.value))}
          name="second_number"
          required
        />
      </label>
      <button type="submit" className="result-btn" onClick={handleOperation}>
        {type}
      </button>

      {/* <p>
         <Link to="/login">Log In</Link>
        </p> */}
    </div>
  );
};

export default Logic;
