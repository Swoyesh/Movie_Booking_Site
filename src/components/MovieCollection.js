import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieCollection = () => {
  const [movies, setMovies] = useState([]);
  const context = useContext
  const {getMovies} = context

  useEffect(() => {
    // Fetch movies from an API or a local data source
    const fetchData = async () => {
      try {
        const response = await getMovies()
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Movie Collection</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <Link to={`/buy/${movie.id}`}>
            Buy Tickets
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieCollection;