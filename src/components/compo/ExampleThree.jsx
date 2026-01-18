import React, { useEffect, useState } from "react";

function ExampleThree() {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });
  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    ("name", JSON.stringify(name));
  }, [name]);

  const handleClear = () => setName("");
  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
}

export default ExampleThree;
