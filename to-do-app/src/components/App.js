import { useState } from "react";
import AddItemForm from "./AddItemForm";
import Button from "./Button";
import CurrentDate from "./CurrentDate";
import ItemList from "./Itemlist";
import Progress from "./Progress";
import Quote from "./Quote";

function App() {
  // Open add item form
  const [openAddItemForm, setAddItemOpenForm] = useState(false);
  const setOpenFormHandler = () => {
    setAddItemOpenForm((setOpen) => !setOpen);
  };
  ////////////////////////////////////////

  // set new item
  const [item, setItem] = useState("");
  //////////////////

  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <CurrentDate />
      <Quote />
      <Progress />
      <ItemList items={items} />
      <Button onclick={setOpenFormHandler}>Add new Item ➕</Button>
      <AddItemForm
        openForm={openAddItemForm}
        onSetOpenForm={setOpenFormHandler}
        item={item}
        onSetItem={setItem}
        setItems={setItems}
      />
    </div>
  );
}

export default App;
