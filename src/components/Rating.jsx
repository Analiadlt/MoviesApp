import React, { useState, useEffect } from 'react';

export default function Rating({ratingOrigin, changeRating}) {
    const [rating, setRating] = useState(0);

    const handleClick = (value) => {
        setRating(value);
    };

    function addRatingOrigin(){
        let result = Math.floor(ratingOrigin/2);
        setRating(result);
    }

    // useEffect(()=>{
    //     addRatingOrigin();
    // }, [])
    useEffect(()=>{
        addRatingOrigin();
    },)

    return (
        <div>
            <h1>Rating</h1>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return <label key={i}>
                    <input
                        type="radio"
                        name="rating" 
                        value={ratingValue}
                        onClick={()=> handleClick(ratingValue)}
                        />
                        <span className={ratingValue <= rating? 'filled': ''}>&#9733;</span>
                </label>
            })

            }
        </div>
    )
}
