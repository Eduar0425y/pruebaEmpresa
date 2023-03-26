import axios, { AxiosResponse } from "axios";
import { API_KEY } from '../config';


export async function buscarSimilar(idMovie): Promise<AxiosResponse<any, any>>{

  
  const response = axios.get(

    `https://api.themoviedb.org/3/movie/${idMovie}/similar?api_key=${API_KEY}&language=es&page=1`

  );

  return response;

}