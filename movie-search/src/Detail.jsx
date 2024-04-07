import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';

const API_URL_DETAIL = "http://www.omdbapi.com?apikey=3fa06d90";
// const API_URL = "http://www.omdbapi.com?apikey=3fa06d90";

const Detail = ({ movies }) => {
  const { id } = useParams();
  const trimmedId = id ? id.trim() : null;
  // const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [showSearchResults, setShowSearchResults] = useState(true);

  const detailMovies = async (id) => {
    try {
      const response = await fetch(`${API_URL_DETAIL}&i=${id}`);
      const data = await response.json();
      setMovieDetails(data);
    } catch (error){
      console.error("Fetching movie details failed", error);
    } 
  }

  const handleMovieClick = () => {
    setShowSearchResults(false);
  };

  useEffect(() => {
    detailMovies(id);
  }, [id]);


  const movie = movies.find((movie) => movie.imdbID === trimmedId);

  return (
    <div className="details">
        <Link to="/" className='back-search'>
          <button className="back-search">Back to Search</button>
        </Link>
      
      <div className='movie-details'>
        {movie && (
          <>
          <h1>{movie.Type} details:</h1>
            <h2 className="type-details">{movie.Title}</h2>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
          </>
        )}
        <p>Rated: {movieDetails?.Rated || 'N/A'}</p>

        <div>
          {Object.keys(movieDetails).length > 0 ? (
            <div>
              {movieDetails.Rating}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <p>Genre: {movieDetails?.Genre}</p>
        <p>Type: {movie?.Type}</p>
        <p>Year: {movie?.Year}</p>
        <p>Notable Cast Members: {movieDetails?.Actors}</p>
        <p>Director: {movieDetails?.Director}</p>
        <p>Language: {movieDetails?.Language}</p>
        <p>Metascore: {movieDetails?.Metascore}</p>
        <p>Awards: {movieDetails?.Awards}</p>
        <p>Runtime: {movieDetails?.Runtime}</p>
        <p>Writer: {movieDetails?.Writer}</p>
        <p>IMDB Rating: {movieDetails?.imdbRating}</p>
        <p>IMDB Votes: {movieDetails?.imdbVotes}</p>
        <p>Country: {movieDetails?.Country}</p>      
        <p>DVD Release: {movieDetails?.DVD}</p> 
        <div>
          <div>
            <p>
              {movieDetails.BoxOffice !== undefined || 'N/A' ? (`Box Office: This movie did amazing with an astounding ${movieDetails.BoxOffice} at box office. This movie was one for the charts!`):(`Box Office: This movie was not displayed on the Box Office`)}
            </p>
          </div>
        </div>      
        
        <p>Awards: {movieDetails.Awards}</p>
        <p>Released on {movieDetails.Released}</p>
        <p>Plot: {movieDetails.Plot}</p> 
  
      </div>
           
      
      {showSearchResults && (
        <div className='search-results'>
          {searchResults.map((movie, index) => (
            <Link to= {`/movie/${movie.imdbID}`} >
              <div key={index} onClick={handleMovieClick}>
              <h3>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            </Link>
            
          ))}
          </div>
      )}
      
  </div>
  );
};

export default Detail;

 