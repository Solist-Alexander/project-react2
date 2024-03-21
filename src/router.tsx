import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";
import {MoviesPage} from "./pages/MoviesPage";
import {MainLayout} from "./layouts/MainLayout";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>,
            },

        ]
    }

])

export {
    router
}