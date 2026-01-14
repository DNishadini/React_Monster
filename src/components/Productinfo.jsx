import React from "react";

function Productinfo() {
  const product = {
    name: "laptop",
    price: 1200,
    avilability: "In Stock",
  };
  return (
    <div>
      <h1>Name:{product.name}</h1>
      <h1>Price:{product.price}</h1>
      <h1>Availability:{product.avilability}</h1>
    </div>
  );
}

export default Productinfo;
