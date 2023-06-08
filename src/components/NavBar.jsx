import React from 'react';
import './NavBar.css';
import { useState } from 'react';

export default function NavBar({onSearch}) {

  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput('');
  }

  return (
    <nav className='navbar'>
      <h1>Movies</h1>
      <div className='navbar_search'>
        <input value={input} onChange={handleInput} type='text' placeholder='Search...' />
        <button onClick={handleSubmit} type='button'>Search</button>
      </div>

    </nav>
  )
}
