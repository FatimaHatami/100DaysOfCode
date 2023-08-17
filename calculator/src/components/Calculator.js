import React from "react";
import Output from "./Output";
import Btn from "./Btn";

const Calculator = ({ btns, value1, value2, onSetVal }) => {
  return (
    <div className="calculator">
      <Output value1={value1} value2={value2} />
      <div className="btns">
        {/* {console.log(val)} */}
        {btns.map((btn, i) => (
          <Btn onSetVal={onSetVal} key={i}>
            {btn}
          </Btn>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
