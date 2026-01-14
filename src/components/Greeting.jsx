import React from "react";

function Greeting(props) {
  return props.timeOfDay === "morning" ? (
    <h1>Good Morning!</h1>
  ) : (
    <h1>Good Evening!</h1>
  );
}

export default Greeting;
