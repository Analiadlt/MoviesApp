import React, { useState, useEffect } from 'react';
import "./Detail.css";
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const api_key = '5f57383b20976f0b48d856271d485fbc';
export default function Detail() {

    let path = useParams();
    const [detail, setDetail] = useState();

    const getDetail = async function () {
        const detail_id = await axios.get(`https://api.themoviedb.org/3/movie/${path.detailId}?api_key=${api_key}&query=ET&language=en-US&page=1`)
        setDetail(detail_id.data);
    }

    useEffect(() => {
        getDetail();
    }, )
    // }, [])


    return (
        <div className='movieDetail'>
            {
            detail ? (
                <>
                    <Link to='/home'>
                        <button>Back</button>
                    </Link>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
                        alt={detail.title}
                        className='movieDetail_poster'
                    />
                    <div className='movieDetail_info'>
                        <h1 className='movieDetail_title'>{detail.title}</h1>
                        <div className='movieDetail_meta'>
                            <span className='movieDetail_releaseDate'>{detail.release_date}</span>
                            <span className='movieDetail_rating'>{detail.vote_average}</span>
                        </div>
                        <p className='movieDetail_description'>{detail.overview}</p>
                    </div>
                </>) : (<h3>'Loading...'</h3>)
            }
        </div>
    )
}