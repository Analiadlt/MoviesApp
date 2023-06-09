import React, { useState, useEffect } from "react";
import "./Detail.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const api_key = "5f57383b20976f0b48d856271d485fbc";

export default function Detail() {
  let path = useParams();
  const [detail, setDetail] = useState();

  const getDetail = async function () {
    const detail_id = await axios.get(
      `https://api.themoviedb.org/3/movie/${path.detailId}?api_key=${api_key}&query=ET&language=en-US&page=1`
    );
    setDetail(detail_id.data);
  };

  useEffect(() => {
    getDetail();
  }, []);
  // }, [])
  console.log("movie DETAIL ", detail);

  return (
    <div className="movieDetail">
      {detail ? (
        <>         
          <div className="movieDetail_info">
          <h1 className="movieDetail_title">{detail.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
              alt={detail.title}
              className="movieDetail_poster"
            />
            <ul className="movieGenres">
              {detail.genres.map((gen) => (
                <li key={gen.id}>
                  <span>{gen.name}</span>
                </li>
              ))}
            </ul>
            <div className="movieDetail_meta">
              <span className="movieDetail_releaseDate">
                Release Date: {detail.release_date}
              </span>
            </div>
            <div className="movieDetail_meta">
              <span className="movieDetail_rating">
                Rating: {detail.vote_average}
              </span>
            </div>
            <span className="movieDetail_description">{detail.overview}</span>
          </div>
        </>
      ) : (
        <h3>'Loading...'</h3>
      )}
    </div>
  );
}
