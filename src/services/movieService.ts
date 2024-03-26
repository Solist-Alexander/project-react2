import {apiService} from "./apiService";
import {urls} from "../constans";
import {IRes} from "../types";
import {IMovieDetails, IMovieInfo} from "../interfaces ";

const movieService = {
    getAll: (page:string|null = '1'): IRes<IMovieInfo> => apiService.get(urls.movie.base, {params: {page}}),
    getById:(id:number): IRes<IMovieDetails> => apiService.get(urls.movie.byId(id)),
    getAllMovieByIDGenres:(id:number, page:string|null = '1'):IRes<IMovieInfo> => apiService.get(urls.movie.genresByID(id),{params: {page}})
}


export {
    movieService
}