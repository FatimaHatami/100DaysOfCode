import React, { useState } from "react";
import Button from "./Button";

const AddItemForm = ({
  openForm,
  onSetOpenForm,
  item,
  onSetItem,
  setItems,
}) => {
  const submitAddItemHandler = () => {
    // setItems(item);
  };
  return (
    openForm && (
      <form className="add-item-form" onSubmit={submitAddItemHandler}>
        <span onClick={onSetOpenForm}>&#x2715;</span>
        <input
          type="text"
          value={item}
          onChange={(e) => onSetItem(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    )
  );
};

export default AddItemForm;
