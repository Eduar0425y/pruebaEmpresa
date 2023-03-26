import axios, { AxiosResponse } from "axios";
import { API_KEY } from "../config";

export async function peticionPopularMovies(currentPage): Promise<AxiosResponse<any, any>>{

    const response = await axios.get(

        'https://api.themoviedb.org/3/movie/popular',

        {

          params: {

            api_key: API_KEY,
            language: 'es',
            page: currentPage,

          },

        }

      );

      return response;
}

