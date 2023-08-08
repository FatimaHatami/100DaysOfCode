import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = () => {
  // states
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // variables
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  // functions
  const addDateHanler = () => {
    setCount((c) => c + step);
  };
  const subDateHanler = () => {
    setCount((c) => c - step);
  };
  const addStepHandler = () => {
    setStep((s) => s + 1);
  };
  const subStepHandler = () => {
    setStep((s) => s - 1);
  };

  return (
    <div className="counter">
      <div className="count step">
        <button className="btn" onClick={subStepHandler}>
          -
        </button>
        <span> step : {step} </span>
        <button className="btn" onClick={addStepHandler}>
          +
        </button>
      </div>
      <div className="count">
        <button className="btn" onClick={subDateHanler}>
          -
        </button>
        <span>count : {count}</span>
        <button className="btn" onClick={addDateHanler}>
          +
        </button>
      </div>
      <p className="date">
        <span>{count === 0 && "Today is "}</span>
        <span>{count > 0 && `${count} days from today is `}</span>
        <span>{count < 0 && `${Math.abs(count)} days ago was `}</span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
};

export default App;
