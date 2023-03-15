
import React, { useState } from 'react';
import Footer from '../componnent/Footer';
import HeaderPag from '../componnent/HeaderPag';
import MovieList from '../componnent/QueryMovie';

const AppQuery: React.FC = () => {

  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

  };


  return (

    <div>

      <HeaderPag />

      <form onSubmit={handleSubmit}>

        <div className="input-group mb-3" >

          <input
            className='form-control border opacity-75 z-0'
            placeholder="Ingrese el nombre de la pelicula"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <span className="input-group-text" id="addon-wrapping">

            <button type="submit" style={{border: "none", width:"100%", height: "100%"}} className="bg-transparent">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{marginRight: "6px"}}>
                  
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              
              </svg>
            
            </button>
          
          </span>
        
        </div>

      </form>

      {!query ? (

        <div>

          <center style={{width: "100%", height: "100%"}}>

            <h5>Por favor ingrese un nombre para buscar</h5>

          </center>  

        </div> 

      ):(

        <div>

          {query && <MovieList query={query} />}
          
        </div>

      )}

      <Footer />

      
    </div>

  );
  
};

export default AppQuery;