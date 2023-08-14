import React from "react";

const Sort = ({ orderBy, onOrderBy, onClearList }) => {
  return (
    <div className="actions">
      <select value={orderBy} onChange={(e) => onOrderBy(e)}>
        <option value="input">Sort items by input order</option>
        <option value="description">Sort items by Description order</option>
        <option value="packed">Sort items by packed status</option>
      </select>
      <button onClick={onClearList}>Clear List</button>
    </div>
  );
};

export default Sort;
