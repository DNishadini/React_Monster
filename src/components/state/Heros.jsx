import React, { use, useState } from "react";

function Heros() {
  const [heros, setHeros] = useState([
    { id: 1, title: "Spiderman", rating: 8 },
    { id: 2, title: "Ironman", rating: 9 },
  ]);
  const handleClick = () => {
    setHeros(
      heros.map((m) => (m.id === 1 ? { ...heros, title: "Batman" } : m)),
    );
  };
  return (
    <div>
      {heros.map((m) => (
        <li key={m.id}>{m.title}</li>
      ))}
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default Heros;
