import React, { useState } from "react";
import Button from "./Button";

const AddItemForm = ({
  openForm,
  onSetOpenForm,
  item,
  onSetItem,
  setItems,
}) => {
  const addNewItemHandler = (item) => {
    setItems((items) => [...items, item]);
  };

  const submitAddItemHandler = (e) => {
    e.preventDefault();
    const newItem = { item, id: crypto.randomUUID() };
    addNewItemHandler(newItem);
    onSetItem("");
    onSetOpenForm(false);
  };
  return (
    openForm && (
      <form className="add-item-form" onSubmit={submitAddItemHandler}>
        <span onClick={onSetOpenForm}>&#x2715;</span>
        <input
          type="text"
          placeholder="Add an item..."
          value={item}
          onChange={(e) => onSetItem(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    )
  );
};

export default AddItemForm;
