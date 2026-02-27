import React, { useState } from "react";

function StepCounter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([initialValue]);
  const [operationCount, setOperationCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => {
      const newValue = prev + step;
      setHistory((prevHistory) => [...prevHistory, newValue]);
      setOperationCount((prevOps) => prevOps + 1);
      return newValue;
    });
  };

  const handleDecrement = () => {
    setCount((prev) => {
      const newValue = prev - step;
      setHistory((prevHistory) => [...prevHistory, newValue]);
      setOperationCount((prevOps) => prevOps + 1);
      return newValue;
    });
  };

  const handleReset = () => {
    setCount(initialValue);
    setHistory([initialValue]);
    setOperationCount(0);
  };

  const lastFiveValues = history.slice(-5);

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", marginBottom: "16px" }}>
      <h2>Step Counter</h2>

      <p>Current count: {count}</p>
      <p>Total operations: {operationCount}</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} style={{ marginLeft: "8px" }}>Decrement</button>
      <button onClick={handleReset} style={{ marginLeft: "8px" }}>Reset</button>

      <p>Last 5 values:</p>
      <ul>
        {lastFiveValues.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
}

export default StepCounter;