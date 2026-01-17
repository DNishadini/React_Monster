import React from "react";
import { useState } from "react";

function AddFriends() {
  const [friends, setFriends] = useState(["Alex", "Jordan", "Taylor"]);
  const addOneFriend = () => {
    setFriends([...friends, "Janith Dilsham"]);
  };
  return (
    <div>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addOneFriend}>Add</button>
    </div>
  );
}

export default AddFriends;
