import axios, { AxiosResponse } from "axios";
import { API_KEY } from "../config";

export async function peticion(idGenre, currentPage): Promise<AxiosResponse<any, any>>{

    const response = await axios.get(
    
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es&with_genres=${idGenre}`,

        {

          params: {

            page: currentPage,

          },

        }
      );

      return response;
}