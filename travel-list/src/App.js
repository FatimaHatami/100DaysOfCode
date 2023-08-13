import { useState } from "react";

const App = () => {
  // states
  const [items, setItems] = useState([]);

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

  return (
    <div className="app">
      <Logo />
      <Form addItem={addNewItemHandle} />
      <List
        items={items}
        onDeleteItem={deleteItemHandle}
        onUpdateItem={updateItemPacked}
      />
      <Stats items={items} />
    </div>
  );
};

const Logo = () => {
  return <h1> 🌳 Far Away 💼</h1>;
};
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
const List = ({ items, onDeleteItem, onUpdateItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
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
const Item = ({ item, onDeleteItem, onUpdateItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};
const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );
  const itemsNum = items.length;
  const packedNum = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((packedNum / itemsNum) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? `You got everything, Ready to go ✈`
          : `You have ${itemsNum} items on your list, and you already packed
        ${packedNum} - (${percentPacked}%)`}
      </em>
    </footer>
  );
};

export default App;
