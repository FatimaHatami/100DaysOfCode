import React from "react";

const FormSplitBill = ({ selected }) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selected.name}</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label> 🧍‍♂️ Your expense</label>
      <input type="text" />
      <label>👭 {selected.name}'s expense</label>
      <input type="text" />
      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selected.name}</option>
      </select>
    </form>
  );
};

export default FormSplitBill;
