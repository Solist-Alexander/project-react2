import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IMovieInfo} from "../../interfaces ";
import {searchService} from "../../services";

interface IState {
    page: number
    resultSearch: IMovie[],
}

const initialState:IState = {
    page: null,
    resultSearch: null,
}

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

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllMovieBySearch.fulfilled, (state, action)=>{
                const {results, page} = action.payload
                state.resultSearch = results
                state.page = page
            })
})

const {reducer: searchReducer, actions} = searchSlice

const searchActions = {
    ...actions,
    getAllMovieBySearch
}
export {
    searchReducer,
    searchActions
}