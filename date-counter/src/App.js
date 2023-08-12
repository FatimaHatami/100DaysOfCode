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
  const changeStepHandler = (e) => {
    setStep(+e.target.value);
  };
  const clickHandle = () => {
    setStep(0);
    setCount(0);
  };
  return (
    <div className="counter">
      <div className="count step">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={changeStepHandler}
        />
        <span> step : {step} </span>
      </div>
      <div className="count">
        <button className="btn" onClick={subDateHanler}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
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
      {count !== 0 || step !== 0 ? (
        <div>
          <buton className="reset-btn btn" onClick={clickHandle}>
            reset
          </buton>
        </div>
      ) : null}
    </div>
  );
};

export default App;
