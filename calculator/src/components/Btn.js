import React from "react";

const Btn = ({ children, onSetVal, value }) => {
  return (
    <button className="btn" value={children} onClick={onSetVal}>
      {children}
    </button>
  );
};

export default Btn;
