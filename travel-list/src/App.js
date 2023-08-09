import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 5, packed: true },
  { id: 3, description: "Charger", quantity: 2, packed: false },
  { id: 4, description: "Socks", quantity: 12, packed: true },
];

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <List />
      <Stats />
    </div>
  );
};

const Logo = () => {
  return <h1> 🌳 Far Away 💼</h1>;
};
const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const formSubmitHandle = (e) => {
    e.preventDefault();
    if (description) {
      const newItem = { id: Date.now(), description, quantity, packed: false };
      console.log(newItem);
      setDescription("");
      setQuantity(1);
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
const List = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};
const Stats = () => {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
};

export default App;
