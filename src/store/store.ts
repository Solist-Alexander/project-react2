import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";
import {searchReducer} from "./slices/searchSlice";

const store = configureStore({
    reducer:{
        movies: movieReducer,
        genres: genreReducer,
        searches: searchReducer
    }
})

export {
    store
}
