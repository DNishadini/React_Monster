import React from "react";

function List() {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {numbers.map((num) => (
        <ul key={num}>
          <li>{num}</li>
        </ul>
      ))}
    </div>
  );
}

export default List;
