import React from "react";
import Card from "./Card";
import "./Cards.css";

export default function Cards({ allMovies }) {
  return (
    <div className="cards">
      {allMovies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
