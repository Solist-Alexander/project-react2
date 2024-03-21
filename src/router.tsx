import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";
import {MoviesPage} from "./pages/MoviesPage";
import {MainLayout} from "./layouts/MainLayout";
import {MovieInfoPage} from "./pages/MovieInfoPage";
import {GenresPage} from "./pages/GenresPage";
import {SearchPage} from "./pages/SearchPage";
import {GenresIdList} from "./components/GenresIdContainer/GenresIdList";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>,
            },
            {
                path: 'movies/:movieId', element: <MovieInfoPage/>
            },
            {
                path: 'genres', element: <GenresPage/>, children: [
                    {
                        path: '/genres/:genreId', element: <GenresIdList/>
                    }
                ]
            },
            {
                path: 'search', element: <SearchPage/>
            }

        ]
    }

])

export {
    router
}