import React, { useState } from "react";

const Item = ({ item }) => {
  const [checkedItem, setCheckedItem] = useState(false);
  return (
    <div className={`item ${checkedItem && "checked"}`}>
      <input
        type="checkbox"
        id={item.id}
        checked={checkedItem}
        onClick={() => setCheckedItem(!checkedItem)}
      />
      <label for={item.id}>{item.item}</label>
    </div>
  );
};

export default Item;
