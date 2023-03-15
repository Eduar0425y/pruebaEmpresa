import React, { useState, useEffect } from 'react';
import { Movie } from '../models/Pelicula';
import { API_KEY } from '../config';
import axios from 'axios';
import MovieDetails from './MovieDetails';


interface Props {

  query: string;

}

const MovieList: React.FC<Props> = ({ query }) => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {

    const fetchMovies = async () => {

      const response = await axios.get(

        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=es`

      );

      setMovies(response.data.results);

    };
    fetchMovies();

  }, [query]);


  return (

    <div>

      { movies.length == 0 ? (

        <div>

          <center style={{width: "100%", height: "100%"}}>

            <h5>No hay peliculas que coincidan</h5>

          </center>  

        </div> 
      ):(

          <div style={{width : "100%", marginTop: "5%"}}>
            
            <div className='row' style={{display: "felx", justifyContent : "center"}}>
      
              {selectedMovie ? (
        
                <MovieDetails movie={selectedMovie} />
        
              ) : (
        
                movies.map((movie) => (
        
                  <div className="card col-2 bg-transparent" style={{width: "14%", float: "left", height:"320px", margin: "10px", borderRadius: "10px", overflow: "hidden"}}>
                    
                    <div key={movie.id} onClick={() => setSelectedMovie(movie)}>
                      
                      <div style={{width : "100%", height: "200px"}}>
                        {movie.poster_path !== "null" && (
        
                          <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            className="card-img-top"
                            style={{width : '100%', height: "200px", marginLeft: "0", borderRadius: "15px"}}
                          />
                          
                        )}
                      </div>
        
                      <div className="card-body">
        
                        <p className="card-title" style={{marginTop: "10px", maxHeight: "20px" , overflow: "hidden"}}>{movie.title}</p>
        
                      </div>
        
                      <button className='btn btn-outline-primary' style={{cursor: "pointer", position: "absolute", bottom: "10px", width: "85%"}}>Ver detalles</button>
        
                    </div>
        
                  </div>
        
                ))
        
              )}
      
            </div>
            
            
          </div>
      
      )}

  </div>

  );

}

export default MovieList;              