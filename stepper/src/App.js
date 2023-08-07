import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const previousHandler = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const nextHandler = () => {
    if (step < 3) setStep((s) => s + 1);
  };
  return (
    <>
      <button className="close-btn" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="stepper">
          <div className="numbers">
            <div className={`step ${step >= 1 && "active"}`}>1</div>
            <div className={`step ${step >= 2 && "active"}`}>2</div>
            <div className={`step ${step >= 3 && "active"}`}>3</div>
          </div>
          <p className="message">{messages[step - 1]}</p>
          <div className="btns">
            <button onClick={previousHandler}>Previous</button>
            <button onClick={nextHandler}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
