

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Movie = ({ movie, onClick }) => {
  const handleMovieClick = () => {
    onClick && onClick();
  };

  return (
    <div className="movie" onClick={handleMovieClick}>
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={movie.Poster} alt={movie.Title} className="movie-img"/>
      </Link>
      
      <div className="movie-title">
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
        <p>{movie.Type}</p>
      </div>
    </div>
  );
}

export default Movie;
