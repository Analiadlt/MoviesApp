import React, { useState } from 'react';
import "./Card.css";
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Card({ movie }) {

    const [rating, setRating] = useState(movie.vote_average);

    function changeRating(newRating) {
        setRating(newRating);
    }

    return (
        <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='card-img' />
            <div className='cardInfo'>
                <Link className='linki' to={`/detail/${movie.id}`}>
                    <h2 className='cardTitle'>{movie.title}</h2>
                </Link>
                <p className='cardRelease'>{movie.release_date}</p>
                {/* <p className='card-rating'>{movie.vote_average}/10</p> */}
                <p className='cardRating'>{rating}/10</p>
                <Rating ratingOrigin={rating} changeRating={changeRating} />
            </div>
        </div>
    )
}
