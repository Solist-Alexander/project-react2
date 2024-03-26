import {configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, searchReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer:{
        movies: movieReducer,
        genres: genreReducer,
        searches: searchReducer,
        theme: themeReducer
    }
})

export {
    store
}
