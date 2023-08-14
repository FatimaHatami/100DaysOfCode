import React, { useState } from "react";

const Form = ({ addItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const formSubmitHandle = (e) => {
    e.preventDefault();
    if (description) {
      const newItem = { id: Date.now(), description, quantity, packed: false };
      console.log(newItem);
      setDescription("");
      setQuantity(1);
      addItem(newItem);
    } else return;
  };

  return (
    <form onSubmit={formSubmitHandle} className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((o) => (
          <option value={o} key={o}>
            {o}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
