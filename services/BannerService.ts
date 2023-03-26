import axios, { AxiosResponse } from "axios";
import { API_KEY } from '../config';


export async function buscar(): Promise<AxiosResponse<any, any>>{

  
  const response = await axios.get(
        
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es&sort_by=popularity.desc&include_adult=false&page=1`
  
  );

  return response;

}