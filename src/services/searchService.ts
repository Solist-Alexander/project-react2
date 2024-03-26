import {apiService} from "./apiService";
import {IRes} from "../types";
import {urls} from "../constans";
import {IMovieInfo} from "../interfaces ";

const searchService = {
    getAll:(query:string, page:string|null = '1'):IRes<IMovieInfo> => apiService.get(urls.search.base(query), {params: {page}})
}

export {
    searchService
}