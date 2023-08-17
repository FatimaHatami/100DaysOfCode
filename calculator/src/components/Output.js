import React from "react";

const Output = ({ value }) => {
  return (
    <div className="output">
      <div>
        <span>12</span>
        <span>+</span>
      </div>
      <span>{value}</span>
    </div>
  );
};
export default Output;
