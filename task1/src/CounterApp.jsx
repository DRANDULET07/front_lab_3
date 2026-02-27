import React from "react";
import StepCounter from "./StepCounter";


function CounterApp() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Lab 3.1: Step Counter</h1>

      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
    </div>
  );
}

export default CounterApp;