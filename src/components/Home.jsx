import React from "react";
import { useParams } from 'react-router-dom';
import "./Home.css";
import axios from "axios";
// import Rating from './Rating';
import Carousel from "./Carousel";
import Cards from "./Cards";

const api_key = "5f57383b20976f0b48d856271d485fbc";
const title = "The Matrix";

export default function Home({allMovies, popular}) {
  
  // const search = async function () {
  //   // GET list by title
  //   const dataSearch = await axios.get(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${title}&page=1&include_adult=false`
  //   );
    
  //   // console.log("dataseasrch  ", dataSearch.data.results);

  //   // GET list more popular
  //   const morePopular = await axios.get(
  //       `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`
  //   );
  //   //  console.log("morePopular  ", morePopular.data.results);
   
  // };
  // search();
   
  return (
    <div className="home">
       <h3>Popular Movies</h3>
      <div>
        <Carousel popular={popular} />
      </div>

      <div></div>
      <h3>All Movies</h3>
      <div>
        <Cards allMovies={allMovies} />
      </div>
    </div>
  );
}