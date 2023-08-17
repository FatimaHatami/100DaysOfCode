import { useState } from "react";
import Calculator from "./components/Calculator";

const btns = [7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "=", "/"];
function App() {
  const [val1, setVal1] = useState([]);
  const [val2, setVal2] = useState(0);
  const setValueHandler = (e) => {
    let input = e.target.value;
    if (input === "+" || input === "-" || input === "x" || input === "/")
      setVal2((val) => [...val2, e.target.value]);
    // switch(input){
    //   case '+';

    // }
    setVal1((val) => [...val, e.target.value]);
  };
  return (
    <div className="App">
      <Calculator
        btns={btns}
        onSetVal={(e) => setValueHandler(e)}
        value1={val1}
        value={val2}
      />
    </div>
  );
}

export default App;
