import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IGenres} from "../../interfaces ";
import {genreService} from "../../services";

interface IState {
    genres: IGenre[] | null,
}
const initialState:IState = {
    genres: null,
}

const getAll = createAsyncThunk<IGenres, void>(
    'genreSlice/getAll',
    async (_, thunkAPI) =>{
        try {
            const {data} = await genreService.getAll()
            return data
        }
        catch (e){
            const error =  e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state, action) =>{
                state.genres = action.payload.genres
            })
})

const {reducer: genreReducer, actions} = genreSlice

const genreActions = {
    ...actions,
    getAll,
}
export {
    genreReducer,
    genreActions
}