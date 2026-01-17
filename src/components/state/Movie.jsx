import React from "react";
import { useState } from "react";

function Movie() {
  const [movie, setMovie] = useState({
    title: "Inception",
    ratings: 7,
  });
  const handleClick = () => {
    setMovie({ ...movie, ratings: 4 });
  };
  return (
    <div>
      <h1>Title: {movie.title}</h1>
      <p>Rating: {movie.ratings}</p>
      <button onClick={handleClick}>Update Rating</button>
    </div>
  );
}

export default Movie;
