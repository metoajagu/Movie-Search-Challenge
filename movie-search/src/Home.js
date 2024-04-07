
import React, { useState } from 'react';
import SearchIcon from './search-icon.svg';
import MovieList from './MovieList';
import './App.css';

const Home = ({ searchTerm, setSearchTerm, movies, searchMovies, setShowSearchResults, showSearchResults }) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log('Search term:', event.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(inputValue);
    searchMovies(inputValue);
    setShowSearchResults(true);
    document.querySelector('.welcome-message')
      .innerHTML = "";
    
    document.querySelector('.created-by')
    .innerHTML = "Created by Meto Ajagu";
  };

  return (
    <div className="home">
      <h2>movieSearch</h2>
      <p className="welcome-message">"Welcome to movieSearch. A movie database with over 1000+ movies available!"</p>
      <div className="search">
        <input
          placeholder='Search for Movies'
          value={inputValue}
          onChange={handleChange}
          className='search-input'
        />
        <button onClick={handleSearch} className="search-button">
          <img src={SearchIcon} alt="search" className="search-img"/>
        </button>
      </div>
      {showSearchResults && <MovieList movies={movies} />}
    </div>
  );
}

export default Home;
