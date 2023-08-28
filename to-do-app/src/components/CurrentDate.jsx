import React from "react";

const CurrentDate = () => {
  const currentD = new Date();
  return (
    <div className="current-date">
      <p>{currentD.toDateString()}</p>
    </div>
  );
};

export default CurrentDate;
