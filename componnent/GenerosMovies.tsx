import React, { useState } from 'react';
import GenreMovies from './GeneroMoviesResult';

const App = () => {

    const [genreMovies, setGenreMovies] = useState<number>();
    const [genreName, setGenreName] = useState<string>();

  return (

    <div>

      <div className="row list-unstyled fw-normal pb-2 small">

          <div className="col-2 bd-links-span-all lh-lg">

            <h3>Generos</h3>

            <div style={{marginLeft: "20px"}}>

              <a className="btn text-white" onClick={() => {setGenreMovies(28); setGenreName("Acción")}}>Acción</a>
              
              <br></br>
              
              <a className="btn text-white" onClick={() => {setGenreMovies(12); setGenreName("Aventura")}}>Aventura</a>
              
              <br></br>
              
              <a className="btn text-white" onClick={() => {setGenreMovies(16); setGenreName("Animación")}}>Animación</a>
              
              <br></br>
              
              <a className="btn text-white" onClick={() => {setGenreMovies(35) ; setGenreName("Comedia")}}>Comedia</a>
              
              <br></br>
              
              <a className="btn text-white" onClick={() => {setGenreMovies(80) ; setGenreName("Crimen")}}>Crimen</a>
              
              <br></br>
              
              <a className="btn text-white" onClick={() => {setGenreMovies(99); setGenreName("Documentales")}}>Documentales</a>
              
              <br></br>
              
              <a className="btn text-white" onClick={() => {setGenreMovies(18); setGenreName("Drama")}}>Drama</a>
              
              <br></br>
              
              <a className="btn text-white" onClick={() => {setGenreMovies(10751); setGenreName("Drama")}}>Familia</a>
              
              <br></br>
              
              <a className="btn text-white" onClick={() => {setGenreMovies(36); setGenreName("Historia")}}>Historia</a>
              
              <br></br>
              
              <a className="btn text-white" onClick={() => {setGenreMovies(27); setGenreName("Terror")}}>Terror</a>
              
              <br></br>
              
              <a className="btn text-white" onClick={() => {setGenreMovies(9648); setGenreName("Misterio")}}>Misterio</a>
              
              <br></br>
              
              <a className="btn text-white" onClick={() => {setGenreMovies(10749); setGenreName("Romance")}}>Romance</a>
              
              <br></br>
              
              <a className="btn text-white" onClick={() => {setGenreMovies(878); setGenreName("Ciencia Ficción")}}>Ciencia Ficción</a>
              
              <br></br>
              
              <a className="btn text-white" onClick={() => {setGenreMovies(10770); setGenreName("Ciencia Ficción")}}>Peliculas de TV</a>
            
            </div>
          
          </div>
            
          <div className="col">

            <GenreMovies idGenre={genreMovies} genero={genreName}/>

          </div>

      </div>

    </div>

  );

};

export default App;