import React, { useState } from "react";
import Output from "./Output";
import Btn from "./Btn";

const numbers = [
  ["C", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, "="],
];
const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const Calculator = () => {
  const [calc, setCalc] = useState({
    num: 0,
    sign: "",
    result: 0,
  });
  const equalClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        result: toLocaleString(
          math(
            Number(removeSpaces(calc.result)),
            Number(removeSpaces(calc.num)),
            calc.sign
          )
        ),
        sign: "",
        num: 0,
      });
      console.log(calc);
    }
  };

  const resetBtnsHandler = () => {
    setCalc({ ...calc, num: 0, sign: "", result: 0 });
  };
  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setCalc({
      ...calc,
      sign: value,
      result: !calc.result && calc.num ? calc.num : calc.result,
      num: 0,
    });
  };
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0"
          : removeSpaces(calc.num) % 1 === 0
          ? toLocaleString(Number(removeSpaces(calc.num + value)))
          : toLocaleString(calc.num + value),
      result: !calc.sign ? 0 : calc.result,
    });
  };
  return (
    <div className="calculator">
      <Output value={calc.num ? calc.num : calc.result} />
      <div className="btns">
        {numbers.flat().map((btn, i) => (
          <Btn
            key={i}
            onClick={
              btn === "C"
                ? resetBtnsHandler
                : btn === "+" || btn === "-" || btn === "X" || btn === "/"
                ? signClickHandler
                : btn === "="
                ? equalClickHandler
                : numClickHandler
            }
          >
            {btn}
          </Btn>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
