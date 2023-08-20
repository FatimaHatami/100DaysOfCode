import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriend }) => {
  const id = crypto.randomUUID();
  const imgText = `https://i.pravatar.cc/48?=`;
  const [newFriend, setNewFriend] = useState({
    name: "",
    imgUrl: imgText,
    id: crypto.randomUUID(),
    balance: 0,
  });

  const addNewFriendHandler = (e) => {
    e.preventDefault();
    let newFriends = [];
    setNewFriend({
      ...newFriend,
      id: id,
      imgUrl: `${imgText}=?${id}`,
    });
    console.log(newFriend, newFriends);
    onAddFriend(newFriend);
    setNewFriend({
      name: "",
      imgUrl: "https://i.pravatar.cc/48?=",
    });
  };

  return (
    <form className="form-add-friend" onSubmit={addNewFriendHandler}>
      <label>👭 Friend name</label>
      <input
        type="text"
        value={newFriend.name}
        onChange={(e) => setNewFriend({ ...newFriend, name: e.target.value })}
      />
      <label>🖼 Image URL</label>
      <input
        type="text"
        value={newFriend.imgUrl}
        onChange={(e) => setNewFriend({ ...newFriend, imgUrl: e.target.value })}
      />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
