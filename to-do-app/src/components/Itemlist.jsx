import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.length === 0 ? (
        <p className="items-list-text">
          <span>Your To do list for today is empty :(</span>
          <br />
          <span> please add an item to stay productive ⏳</span>
        </p>
      ) : (
        <div className="items-list">
          <p>To Do</p>
          {items.map((item) => (
            <Item item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default ItemList;
