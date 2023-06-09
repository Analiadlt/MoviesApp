import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Detail from "./components/Detail";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const api_key = "5f57383b20976f0b48d856271d485fbc";

function App() {
  const [popular, setPopular] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [allSearchMovies, setAllSearchMovies] = useState([]);

  const getAllMovies = async function () {
    const popular_movies = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    );
    setPopular(popular_movies.data.results);

    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`
    );
    setAllMovies(movies.data.results);
  };

  async function onSearch(title) {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${title}&page=1&include_adult=false`
    );
    setAllMovies(movie.data.results);
    console.log("allMovies ", allMovies);
  }

  function reset() {
    getAllMovies(); //volver todo al principio
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  const location = useLocation();

  return (
    <div className="App">
      <div>
        {location.pathname === "/" ? null : (
          <NavBar onSearch={onSearch} reset={reset} />
        )}
      </div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        {/* <Route path="/home" element={<Home allMovies={allMovies} popular={popular} />}></Route> */}
        <Route path="/home" element={<Home popular={popular} />}></Route>
        <Route path="/allMovies" element={<Cards allMovies={allMovies} />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
