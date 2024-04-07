
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './Detail';
import MovieList from './MovieList';
import Home from './Home';

import './App.css';

const API_URL = "http://www.omdbapi.com?apikey=3fa06d90";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(true);

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log("Fetched Data:", data);
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Fetching movies failed", error);
    }
  };

  const handleSearch = (title) => {
    setSearchTerm(title);
    searchMovies(title); 
    setShowSearchResults(true); // Show search results when searching
  };

  return (
    <Router>
      <div className="movie-search">
        <Home searchTerm={searchTerm} setSearchTerm={handleSearch} searchMovies={searchMovies} movies={movies} setShowSearchResults={setShowSearchResults} showSearchResults={showSearchResults}/>
        <Routes>
          <Route path="/movie/:id" element={<Detail movies={movies} setShowSearchResults={setShowSearchResults} />} />
          <Route path="/" element={<MovieList movies={movies} onMovieClick={() => setShowSearchResults(false)} />} />
        </Routes>
        <p className="created-by">
        </p>
      </div>
    </Router>
  );
};

export default App;
