
import { Movie } from "../models/Pelicula";


interface Props {

    movie: Movie;

  }
  
  const MovieDetails: React.FC<Props> = ({ movie }) => {

    return (

      <div>

        <div className='row' style={{height: "800px",}}>

          <a onClick={() => window.location.reload()} className="position-absolute top-10 left-10 z-3" style={{textDecoration:"none", color: "white", cursor: "pointer", margin: "10px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
          </a>

          <div style={{backgroundImage: "linear-gradient(rgba(0, 0, 0) 10%, rgba(240, 248, 255, 0) 90%)", height : "150px"}} className="position-absolute z-0">
            
          </div>
            
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} className='col-12 z-n2'/>
          
          <div className='row position-absolute' style={{display : "flex", justifyContent : "center", alignItems : "center", height: "800px", backgroundImage: "linear-gradient(to right, rgba(0, 0, 0) 10%, rgba(240, 248, 255, 0) 90%)"}}>
              
            <div className="col-4 left-10">
              
              <p style={{marginLeft: "30px", maxHeight: "400px", overflow: "hidden"}}>
                
                <h2>{movie.title}</h2>
                {movie.overview}
                <br></br>
              
              </p>
            
            </div>
              
            <div className='col-8'>

            </div>
        
          </div>

          </div>

        </div>
    
    );
  
  };
  
  export default MovieDetails;
  