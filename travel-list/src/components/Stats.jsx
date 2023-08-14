import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );
  const itemsNum = items.length;
  const packedNum = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((packedNum / itemsNum) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? `You got everything, Ready to go ✈`
          : `You have ${itemsNum} items on your list, and you already packed
          ${packedNum} - (${percentPacked}%)`}
      </em>
    </footer>
  );
};

export default Stats;
