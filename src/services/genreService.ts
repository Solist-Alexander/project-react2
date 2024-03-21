import {IGenres} from "../interfaces /genreInterface";
import {apiService} from "./apiService";
import {IRes} from "../types";
import {urls} from "../constans";


const genreService = {
    getAll:(): IRes<IGenres> => apiService.get(urls.genre.base)
}

export {
    genreService
}