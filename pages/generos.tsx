import Footer from "../componnent/Footer";
import GenerosMovies from "../componnent/GenerosMovies";
import HeaderPag from "../componnent/HeaderPag";


export default function app (){

    return(

        <div>

        <div id="banner"></div>
        <div id="titulo"></div>
        <div id="header"></div>

            <HeaderPag />

            <GenerosMovies />

            <Footer />

        </div>
        
    );

}