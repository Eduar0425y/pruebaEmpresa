import React, { useState, useEffect } from 'react';
import { Movie } from '../models/Pelicula';
import { API_KEY } from '../config';
import axios from 'axios';
import MovieDetails from './MovieDetails';


interface Props {

  idMovie: number;

}

const MovieList: React.FC<Props> = ({ idMovie }) => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {

    const fetchMovies = async () => {

      const response = await axios.get(

        `https://api.themoviedb.org/3/movie/${idMovie}/similar?api_key=${API_KEY}&language=es&page=1`

      );

      setMovies(response.data.results);

    };
    fetchMovies();

  }, [idMovie]);


  return (

    <div>

      {selectedMovie ? (

        <MovieDetails movie={selectedMovie} />

      ) : (

      movies.map((movie) => (

        <div>

          <div className="card" style={{width: "12%", float: "left", height:"320px", margin: "10px", border: "1px solid black", overflow: "hidden"}}>
            
            <div key={movie.id} onClick={() => setSelectedMovie(movie)}>
              
              <div style={{width : "100%", height: "200px"}}>

                {movie.poster_path !== "null" && (

                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="card-img-top"
                    style={{width : '100%', height: "200px"}}
                  />
                  
                )}
                
              </div>

              <div className="card-body">

                <p className="card-title">{movie.title}</p>

              </div>

              <button className='btn btn-primary'>Ver detalles</button>

            </div>

          </div>
          
        </div>
        
      ))

    )}

  </div>

  );

}

export default MovieList;              