import React from "react";
import Item from "./Item";

const List = ({ items, orderBy, onDeleteItem, onUpdateItem }) => {
  let sortedItems;
  if (orderBy === "input") sortedItems = items;
  if (orderBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (orderBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
