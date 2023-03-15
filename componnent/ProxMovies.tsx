import { useState, useEffect } from 'react';
import { Movie } from '../models/Pelicula';
import { API_KEY } from '../config';
import axios from 'axios';
import MovieDetails from './MovieDetails';



const proxMovies = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {

    const fetchMovies = async () => {

      const response = await axios.get(

        'https://api.themoviedb.org/3/movie/upcoming?',

        {

          params: {

            api_key: API_KEY,
            language: 'es',
            page: currentPage,

          },

        }

      );

      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);

    };

    fetchMovies();

  }, [currentPage]);


  return (

    <div style={{width : "100%", marginTop: "5%"}}>

      <center>

        <h2 style={{marginBottom: "5%"}}>Proximamente</h2>

      </center>
      
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

        )

      }

      </div>
      
      {selectedMovie ? null : (

        <div className='w-100 flex-colum'>

          <button
          className='btn btn-secondary'
          style={{position: "absolute", left: "10px"}}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}>
            Anterior
          </button>

          <button
          className='btn btn-secondary'
          style={{position: "absolute", right: "10px"}}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}>
            Siguiente
          </button>

        </div>

      )}
      
      
    </div>

  );
  
};

export default proxMovies;