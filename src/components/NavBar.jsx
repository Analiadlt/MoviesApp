import React from "react";
import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ onSearch, reset }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput("");
  };

  return (
    <nav className="navbar">
      <Link to='/home'>
        <h1>Movies</h1>
      </Link>

      <div className="navbar_search">
        <input
          value={input}
          onChange={handleInput}
          type="text"
          placeholder="Search..."
        />
        <button onClick={handleSubmit} type="button">
          Search
        </button>
      </div>
      <div className="navbar_allMovies">
        <Link to={`/allMovies`}>
          <button onClick={reset} type="button">
            All Movies
          </button>
        </Link>
      </div>
    </nav>
  );
}
