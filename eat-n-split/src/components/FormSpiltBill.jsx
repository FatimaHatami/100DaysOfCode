import React from "react";
import Button from "./Button";

const FormSplitBill = ({
  selected,
  bill,
  expensePaidByUser,
  whoIsPaying,
  setBill,
  setExpensePaidByUser,
  setWhoIsPaying,
  expensePaidByFriend,
  onSplitBill,
}) => {
  const submitBillHandler = (e) => {
    e.preventDefault();

    if (!bill || !expensePaidByUser) return;
    onSplitBill(
      whoIsPaying === "user" ? expensePaidByFriend : -expensePaidByUser
    );
  };
  return (
    <form className="form-split-bill" onSubmit={submitBillHandler}>
      <h2>Split a bill with {selected.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label> 🧍‍♂️ Your expense</label>
      <input
        type="text"
        value={expensePaidByUser}
        onChange={(e) =>
          setExpensePaidByUser(
            Number(e.target.value) > bill
              ? expensePaidByUser
              : Number(e.target.value)
          )
        }
      />
      <label>👭 {selected.name}'s expense</label>
      <input type="text" disabled value={expensePaidByFriend} />
      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selected.name}</option>
      </select>
      <Button>Split the bill</Button>
    </form>
  );
};

export default FormSplitBill;
