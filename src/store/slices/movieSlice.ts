import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovieDetails, IMovieInfo} from "../../interfaces /movieInterface";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[] | null,
    movieDetails: IMovieDetails | null,
    page:number | null,
}

const initialState: IState = {
    movies: null,
    page: null,
    movieDetails: null
}

    const getAll = createAsyncThunk<IMovieInfo, string | null>(
    'movieSlice/getAll',
    async (page, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        } catch (e) {
            const error =  e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const getMovieDetails = createAsyncThunk<IMovieDetails, number | null>(
    'movieSlice/getMovieDetails',
    async (id,thunkAPI) =>{
        try {
            const {data} = await  movieService.getById(id)
            return data
        }
        catch (e){
            const error =  e as AxiosError
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
            .addCase(getAll.fulfilled, (state, action)=>{
                const {results,page} = action.payload
                state.movies = results
                state.page = page
            })
            .addCase(getMovieDetails.fulfilled,(state, action)=>{
                state.movieDetails = action.payload
            })


})

const {reducer: movieReducer, actions} = movieSlice

const movieActions = {
    ...actions,
    getAll,
    getMovieDetails
}
export {
    movieReducer,
    movieActions
}