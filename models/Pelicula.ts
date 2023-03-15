export interface Movie{

    adult: boolean;
    backdrop_path: string;
    belongs_to_collection : belongs_to_collection;
    budget: number;
    genres : genres[];
    homepage: string | null;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: production_companies[];
    production_countries: production_countries[];
    relase_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: spoke_languages[];
    status: string;
    tegline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

}

export interface belongs_to_collection{
    id: number
    name: string
    poster_path: string
    backdrop_path: string
}

export interface genres{
    id: number;
    name: string;
}

export interface production_companies{
    id: number,
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface production_countries{
    iso_3166_1: string;
    name: string;
}

export interface spoke_languages{
    english_name: string;
    iso_639_1: string;
    name: string;
}