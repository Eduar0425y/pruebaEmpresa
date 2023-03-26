import React, { useState, useEffect } from 'react';
import { peticion } from '../services/GeneroMoviesService';
import { Movie } from '../models/Pelicula';
import MovieDetails from './MovieDetails';

interface Props {

  idGenre: number;
  genero: string;
  
}


const GenreMovies: React.FC<Props> = ({ idGenre, genero }) => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {

        const fetchMovies = async () => {
    
          const response = await peticion(idGenre, currentPage);
    
          setMovies(response.data.results);
          setTotalPages(response.data.total_pages);
    
        };
        fetchMovies();
    
    }, [idGenre | currentPage] ) ;

    return (

      <div style={{width : "100%", marginTop: "5%"}}>
        
        {!genero ? (

          <div></div>

        ):(

          <center>

            <h2 style={{marginBottom: "5%"}}>Resultados para {genero}</h2>

          </center>

        )}
        
        
        <div className='row' style={{display: "felx", justifyContent : "center"}}>
  
        {selectedMovie ? (
  
          <MovieDetails movie={selectedMovie} />
  
        ) : (
  
          movies.map((movie) => (
  
  
            <div className="card col-sm-2 bg-transparent" style={{float: "left", height:"320px", margin: "10px", borderRadius: "10px", overflow: "hidden"}}>
              
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
  
          )
  
        }
  
        </div>
        
        {selectedMovie ? null : (
  
          <center className='w-100 flex-colum'>
  
            <button
            className='btn btn-secondary'
            style={{marginRight: "20px", marginLeft: "-20px"}}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}>
              Anterior
            </button>
  
            <button
            className='btn btn-secondary'
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}>
              Siguiente
            </button>
  
          </center>
  
        )}
        
        
      </div>
  
    ); 

}


export default GenreMovies;              
