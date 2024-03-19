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