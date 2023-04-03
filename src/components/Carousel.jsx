import React from 'react';
import { useState } from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';

export default function Carousel({popular}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? popular.length - 4 : currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex === popular.length - 4 ? 0 : currentIndex + 1);
    };
    const visibleItems = popular.slice(currentIndex, currentIndex + 4);
    
    return (
        <div className="carousel">
            <div className="carousel_cards">
                {visibleItems.map((item) => (
                    <div key={item.id} className="carousel_card">
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                        <Link className='linki' to={`/detail/${item.id}`}>
                            <h3>{item.title.slice(0, 18)}</h3>
                        </Link>
                        <p>{item.overview.slice(0, 20)}</p> {/* se hizo un slice para reducir el texto */}
                    </div>
                ))}
            </div>
            <div className='carousel_controls'>
                <button onClick={handlePrev}>&#8249;</button>
                <button onClick={handleNext}>&#8250;</button>
            </div>
        </div>
    )
}
