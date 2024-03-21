import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovieInfo} from "../../interfaces /movieInterface";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[],
    page:string | null,
    prevPage: number | null,
    nextPage: number | null,
}

const initialState: IState = {
    movies: [],
    page: null,
    prevPage: null,
    nextPage: null,
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


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                const {results} = action.payload
                state.movies = results
            })


})

const {reducer: movieReducer, actions} = movieSlice

const movieActions = {
    ...actions,
    getAll
}
export {
    movieReducer,
    movieActions
}