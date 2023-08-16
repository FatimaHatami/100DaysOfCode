const btns = [7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "=", "/"];
function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

const Calculator = () => {
  return (
    <div className="calculator">
      <Output />
      <div className="btns">
        {btns.map((btn) => (
          <Btn>{btn}</Btn>
        ))}
      </div>
    </div>
  );
};
const Output = () => {
  return (
    <div className="output">
      <div>
        <span>12</span>
        <span>+</span>
      </div>
      <span>2</span>
    </div>
  );
};
const Btn = ({ children }) => {
  return <div className="btn">{children}</div>;
};
export default App;
