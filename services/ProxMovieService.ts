import axios, { AxiosResponse } from "axios";
import { API_KEY } from "../config";

export async function peticionProxMovies(currentPage): Promise<AxiosResponse<any, any>>{

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

      return response;
}

