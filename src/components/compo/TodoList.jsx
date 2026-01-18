import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" value={inputValue} placeholder="Enter todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
