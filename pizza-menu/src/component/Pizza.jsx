import React from "react";

const Pizza = ({ pizza }) => {
  return (
    <li className={`pizza ${pizza.soldOut && "sold-out"} `}>
      <div className="pizza-image">
        <img src={pizza.photoName} alt="focaccia pizza" />
      </div>
      <div className="pizza-details">
        <span>{pizza.name}</span>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
};

export default Pizza;
