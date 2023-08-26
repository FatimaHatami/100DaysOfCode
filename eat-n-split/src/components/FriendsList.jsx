import React, { useState } from "react";
import Friend from "./Friend";

const FriendsList = ({ data, onSelected, selected }) => {
  const friends = data;
  return (
    <ul className="friends-list">
      {friends.map((friend) => (
        <Friend
          friend={friend}
          onSelected={onSelected}
          selected={selected}
          key={crypto.randomUUID()}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
