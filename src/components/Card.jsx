import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Card({ movie }) {
  const [rating, setRating] = useState(movie.vote_average);

  function changeRating(newRating) {
    setRating(newRating);
  }

  return (
    <div className="card">
      <div className="cardInfo">
        <Link className="linki" to={`/detail/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="card-img"
          />
          <h2 className="cardTitle">{movie.title}</h2>
        </Link>
        {/* <p className="cardRelease">{movie.release_date}</p> */}
        {/* <p className="cardRating">{rating}/10</p> */}
        {/* <Rating ratingOrigin={rating} changeRating={changeRating} /> */}
      </div>
    </div>
  );
}
