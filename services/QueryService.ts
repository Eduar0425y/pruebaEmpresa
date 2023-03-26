import axios, { AxiosResponse } from "axios";
import { API_KEY } from "../config";

export async function peticionQuery(query): Promise<AxiosResponse<any, any>>{

    const response = await axios.get(

        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=es`

    );

      return response;
}

