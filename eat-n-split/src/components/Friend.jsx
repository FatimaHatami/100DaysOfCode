import React from "react";
import Button from "./Button";

const Friend = ({ friend, onSelected, selected }) => {
  const isSelected = selected?.id === friend.id;
  return (
    <li className={`${isSelected && "selected"}`}>
      <h3>{friend.name}</h3>
      <img src={friend.imgUrl} alt={friend.name} />
      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      ) : (
        <p>You and {friend.name} are in equal balance</p>
      )}
      <Button onClick={() => onSelected(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
