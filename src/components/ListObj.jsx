import React from "react";

function ListObj() {
  const userInfo = [
    { username: "tyui", email: "test@gmail.com", location: "USA" },
    { username: "sdfg", email: "jd@gmail.com", location: "UK" },
    { username: "xcvb", email: "dinu@gmail.com", location: "Jaipan" },
  ];
  return (
    <div>
      {userInfo.map((user) => (
        <ul key={Math.random()}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </div>
  );
}

export default ListObj;
