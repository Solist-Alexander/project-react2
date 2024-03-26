import {apiService} from "./apiService";
import {IRes} from "../types";
import {urls} from "../constans";
import {IGenres} from "../interfaces ";


const genreService = {
    getAll:(): IRes<IGenres> => apiService.get(urls.genre.base)
}

export {
    genreService
}