import React, { useState } from "react";
import Output from "./Output";
import Btn from "./Btn";

const btns = [7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "=", "/"];


const Calculator = () => {
  let number;
  let sum=[];
  const [calc, setCalc] = useState([]);
  const setValueHandler = (e) => {
    let input = e.target.value;
    for(let i=0;i<10;i++)
    if(input==i){
      number=Number(i);
    }
    switch (input){
      case '+':
        sum.push(calc);
        setCalc([])
        console.log(+sum)
    }
    
    setCalc(calc + input);
  };
  return (
    <div className="calculator">
      <Output value={calc}/>
      <div className="btns">
        {btns.map((btn, i) => (
          <Btn onSetVal={(e) => setValueHandler(e)}>
            {btn}
          </Btn>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
