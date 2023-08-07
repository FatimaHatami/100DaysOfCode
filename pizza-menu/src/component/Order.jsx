import React from "react";

const Order = ({ closingHour, openingHour }) => {
  return (
    <div className="order">
      <p>
        We are currently open from {openingHour}:00 to {closingHour}:00. Come
        visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
