import React from "react";
import { useState } from "react";

function AddFriends() {
  const [friends, setFriends] = useState(["Alex", "Jordan", "Taylor"]);
  const addOneFriend = () => {
    setFriends([...friends, "Janith Dilsham"]);
  };
  const updateOneFriend = () => {
    setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)));
  };
  return (
    <div>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addOneFriend}>Add</button>
      <br />
      <button onClick={updateOneFriend}>Update</button>
    </div>
  );
}

export default AddFriends;
