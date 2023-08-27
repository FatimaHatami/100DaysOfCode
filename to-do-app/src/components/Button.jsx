import React from "react";

const Button = ({ children, onclick }) => {
  return (
    <button className="btn primary-btn" onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
