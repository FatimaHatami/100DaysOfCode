import { useState } from "react";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSpiltBill";
import FriendsList from "./FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    imgUrl: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    imgUrl: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    imgUrl: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [isShown, setIsShown] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selected, setSelected] = useState(null);
  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setIsShown(false);
  };
  const handleSelection = (friend) => {
    // setSelected(friend);
    setSelected((cur) => (cur?.id === friend.id ? null : friend));
    setIsShown(false);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          data={friends}
          onSelected={handleSelection}
          selected={selected}
        />
        {isShown && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={() => setIsShown((isShown) => !isShown)}>
          {isShown ? "close" : "Add freind"}
        </Button>
      </div>
      {selected && <FormSplitBill selected={selected} />}
    </div>
  );
};

export default App;
