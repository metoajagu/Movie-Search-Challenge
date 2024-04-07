

import React from 'react';
import Movie from './Movie';
import './App.css';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="movies-grids">
      {movies && movies.length > 0 ? (
        movies.map(movie => (
          <Movie key={movie.imdbID} movie={movie} onClick={onMovieClick} />
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default MovieList;
