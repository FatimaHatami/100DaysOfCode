import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
const satPercents = [
  { status: "Dissatisfied", percent: 0 },
  { status: "It was ok", percent: 5 },
  { status: "It was good", percent: 10 },
  { status: "Absolutely amazing", percent: 20 },
];

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

const Calculator = () => {
  // states
  const [bill, setBill] = useState("");
  const [sat1, setSat1] = useState(0);
  const [sat2, setSat2] = useState(0);

  // derived state
  let satAvg = (Number(sat1) + Number(sat2)) / 2;
  let tipValue = (bill * satAvg) / 100;
  let finalBill = bill + tipValue;
  // handler functions
  const setBIllHandler = (e) => {
    let number = e.target.value;
    if (!isNaN(number)) setBill(Math.trunc(e.target.value));
  };
  const resetHandler = () => {
    setBill("");
    setSat1(0);
    setSat2(0);
  };

  return (
    <div className="calculator">
      <Tip bill={bill} onSetBill={setBIllHandler} />
      <Satisfiction sat={sat1} onSetSat={setSat1}>
        How did you like the service?
      </Satisfiction>
      <Satisfiction sat={sat2} onSetSat={setSat2}>
        How did your friend like the service?
      </Satisfiction>
      {(bill !== "" || sat1 !== 0 || sat2 !== 0) && (
        <p>
          You pay ${finalBill} (${bill} + ${tipValue} tip)
        </p>
      )}
      <button onClick={resetHandler}>reset</button>
    </div>
  );
};
const Tip = ({ bill, onSetBill }) => {
  return (
    <div className="tip">
      <p>How much was the bill</p>
      <input type="text" value={bill} onChange={(e) => onSetBill(e)} />
    </div>
  );
};
const Satisfiction = ({ children, sat, onSetSat }) => {
  return (
    <div className="satisfiction">
      <p>{children}</p>
      <select value={sat} onChange={(e) => onSetSat(e.target.value)}>
        {satPercents.map((sat) => (
          <option value={sat.percent}>
            {sat.status} ({sat.percent}%)
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
