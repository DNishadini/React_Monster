import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const eventHandler = () => {
    setCount(count + 1);
  };
  const deHandler = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={eventHandler}>Increment</button>
      <button onClick={deHandler}>Decrement</button>
    </div>
  );
}

export default Counter;
