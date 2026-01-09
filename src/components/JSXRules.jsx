import React from "react";

const JSXRules = () => {
  const myName = "Dinushika";
  const multiply = (a, b) => a * b;
  const specialClass = "anything-i-want";
  return (
    <div>
      <h1>JSX Rules</h1>
      <p>JSX must return a single parent element</p>
      <p>JSX elements must be properly closed</p>
      <p>
        JSX attributes are written using camelCase(eg.className instead of
        class)
      </p>
      <p>2 + 2 = {2 + 2}</p>
      <h1>{myName}</h1>
      <p>My Friends List: {["Alex", "John", "Waheed"]}</p>
      <p>3 * 4 ={multiply(3, 4)} </p>
      <p className={specialClass}>This is special class</p>
    </div>
  );
};

export default JSXRules;
