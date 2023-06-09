import React from "react";
import Card from "./Card";
import "./Cards.css";

export default function Cards({ allMovies }) {
  return (
    <>
      <h3>All Movies</h3>
      <div className="cards">
        {allMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
