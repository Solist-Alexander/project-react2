import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IMovie, IMovieDetails, IMovieInfo} from "../../interfaces /movieInterface";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";
import {searchService} from "../../services/searchService";

interface IState {
    movies: IMovie[]
    movieDetails: IMovieDetails
    page: number
    MovieByIDGenres: IMovie[]
    resultSearch: IMovie[]
}

const initialState: IState = {
    movies: null,
    page: null,
    movieDetails: null,
    MovieByIDGenres: null,
    resultSearch: null
}

const getAll = createAsyncThunk<IMovieInfo, string | null>(
    'movieSlice/getAll',
    async (page, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
const getAllMovieByIDGenres = createAsyncThunk<IMovieInfo, { id: number, page: string | null }>(
    'movieSlice/getAllMovieByIDGenres',
    async ({id, page}, thunkAPI) => {
        try {
            const {data} = await movieService.getAllMovieByIDGenres(id, page)
            return data
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
const getAllMovieBySearch = createAsyncThunk<IMovieInfo, { query: string, page: string | null }>(
    'movieSlice/getAllMovieBySearch',
    async ({query, page}, thunkAPI) => {
        try {
            const {data} = await searchService.getAll(query, page)
            return data
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const getMovieDetails = createAsyncThunk<IMovieDetails, number | null>(
    'movieSlice/getMovieDetails',
    async (id, thunkAPI) => {
        try {
            const {data} = await movieService.getById(id)
            return data
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllMovieBySearch.fulfilled, (state, action)=>{
                const {results, page} = action.payload
                state.resultSearch = results
                state.page = page
            })

            .addCase(getMovieDetails.fulfilled, (state, action) => {
                state.movieDetails = action.payload
            })
            .addMatcher(isFulfilled(getAll, getAllMovieByIDGenres), (state, action) => {
                const {results, page} = action.payload
                state.movies = results
                state.page = page
            })


})

const {reducer: movieReducer, actions} = movieSlice

const movieActions = {
    ...actions,
    getAll,
    getMovieDetails,
    getAllMovieByIDGenres,
    getAllMovieBySearch
}
export {
    movieReducer,
    movieActions
}