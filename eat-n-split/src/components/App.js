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

  const [bill, setBill] = useState("");
  const [expensePaidByUser, setExpensePaidByUser] = useState("");
  const expensePaidByFriend = bill - expensePaidByUser;
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setIsShown(false);
  };
  const handleSelection = (friend) => {
    // setSelected(friend);
    setSelected((cur) => (cur?.id === friend.id ? null : friend));
    setIsShown(false);
  };

  const splitBillhandler = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        selected.id === friend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelected(null);
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
      {selected && (
        <FormSplitBill
          selected={selected}
          bill={bill}
          expensePaidByUser={expensePaidByUser}
          whoIsPaying={whoIsPaying}
          expensePaidByFriend={expensePaidByFriend}
          setBill={setBill}
          setExpensePaidByUser={setExpensePaidByUser}
          setWhoIsPaying={setWhoIsPaying}
          onSplitBill={splitBillhandler}
        />
      )}
    </div>
  );
};

export default App;
