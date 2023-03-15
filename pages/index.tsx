import HeaderPagIndex from '../componnent/HeaderPag';
import MostPopularMovies from '../componnent/popularMovies';
import Banner from '../componnent/Banner';
import Footer from '../componnent/Footer';

const App = () => {

  return (

    <div>

      <div className='position-absolute'>

        <HeaderPagIndex />

      </div>

      <div className='top-0'>

          <Banner />
          
      </div>
      
      <div id='popularMovies'>
        
        <MostPopularMovies/>
        
      </div>

      <Footer />

    </div>

  );

};

export default App;