import React from "react";

const Btn = ({ children, onClick, value }) => {
  return (
    <button className="btn" value={children} onClick={onClick}>
      {children}
    </button>
  );
};

export default Btn;
