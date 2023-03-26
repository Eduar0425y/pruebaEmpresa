import { useEffect, useState } from 'react';
import { Movie } from '../models/Pelicula';
import { buscar } from '../services/BannerService'


const Banner: React.FC = () => {

  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);

  useEffect(() => {

    const fetchMovies = async () => {

      const response = await buscar()

      const randomIndex = Math.floor(Math.random() * response.data.results.length);
      setRandomMovie(response.data.results[randomIndex]);

    };

    fetchMovies();

  }, []);

  if (!randomMovie) {

    return (
    
      <div className="spinner-border" role="status">

        <span className="visually-hidden">Loading...</span>

      </div>      
    
    );

  }

  return (

    <div>

        <div className='row' style={{height: "800px",}}>

          <div style={{backgroundImage: "linear-gradient(rgba(0, 0, 0) 10%, rgba(240, 248, 255, 0) 90%)",height : "150px"}}
            className="position-absolute z-0">
            
          </div>
            
            <img src={`https://image.tmdb.org/t/p/w500/${randomMovie.backdrop_path}`} 
              alt={randomMovie.title} className='col-sm-12 z-n2'/>
            
            <div className='row position-absolute' 
              style={{display : "flex", justifyContent : "center", alignItems : "center", height: "800px", backgroundImage: "linear-gradient(to right, rgba(0, 0, 0) 10%, rgba(240, 248, 255, 0) 90%)"}}>
                
                <div className="col-sm-4 left-10">
                  
                  <p style={{marginLeft: "30px", maxHeight: "400px", overflow: "hidden"}}>
                    
                    <h2>{randomMovie.title}</h2>

                    {randomMovie.overview}

                    <br></br>

                    <a className='btn btn-primary' href='#popularMovies' style={{cursor: "pointer", width: "25%", marginTop: "15px"}}>
                      Ver más
                    </a>
                  
                  </p>

                </div>

                <div className='col-sm-8'>

                </div>

            </div>

        </div>

    </div>
    
  );
};

export default Banner;