import {IGenre} from "./genreInterface";

export interface IMovie {
    id: number;
    title: string;
    genre_ids: number[];
    poster_path: string;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    overview: string;
    media_type: string;
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}



export interface IMovieInfo {
    page: number,
    results: IMovie[],
    "total_pages": number,
    "total_results": number
}

export interface IMovieDetails {
    adult: boolean;
    backdrop_path: string;
    budget: number;
    genres: IGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}