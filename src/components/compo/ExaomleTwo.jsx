import React from "react";
import { useState } from "react";

function ExaomleTwo() {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100),
  );
  const generateNewRandomNum = () => {
    const newNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newNumber);
  };
  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={generateNewRandomNum}>Generate New Number</button>
    </div>
  );
}

export default ExaomleTwo;
