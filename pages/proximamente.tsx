import Footer from '../componnent/Footer';
import HeaderPag from '../componnent/HeaderPag';
import ProxMovies from '../componnent/ProxMovies';

const App = () => {

  return (

    <div>

      <div id="banner"></div>
      <div id="titulo"></div>
      <div id="header"></div>

    <HeaderPag />
    
      <div id='cont'>

        <ProxMovies />
        
      </div>

      <Footer />

    </div>

  );

};

export default App;