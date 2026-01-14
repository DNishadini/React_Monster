import React from "react";

function ListObj() {
  const userInfo = [
    { username: "tyui", email: "test@gmail.com", location: "USA" },
    { username: "sdfg", email: "jd@gmail.com", location: "UK" },
    { username: "xcvb", email: "dinu@gmail.com", location: "Jaipan" },
  ];
  return (
    <div>
      {userInfo.map(({ username, email, location }) => (
        <ul key={Math.random()}>
          <li>{username}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
      ))}
    </div>
  );
}

export default ListObj;
