import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import List from "./List";
import Sort from "./Sort";
import Stats from "./Stats";

const App = () => {
  // states
  const [items, setItems] = useState([]);

  const [orderBy, setOrderBy] = useState("input");
  // Functions
  const addNewItemHandle = (item) => {
    setItems((items) => [...items, item]);
  };
  const deleteItemHandle = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const updateItemPacked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  // order function
  const orderByHandler = (e) => {
    setOrderBy(e.target.value);
  };
  // Clear list function
  const clearListHandler = () => {
    const confirm = window.confirm(
      "Are you sure you want to clear the list completely?"
    );

    if (confirm) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form addItem={addNewItemHandle} />
      <List
        items={items}
        orderBy={orderBy}
        onDeleteItem={deleteItemHandle}
        onUpdateItem={updateItemPacked}
      />
      <Sort
        onOrderBy={orderByHandler}
        orderBy={orderBy}
        onClearList={clearListHandler}
      />
      <Stats items={items} />
    </div>
  );
};







export default App;
