import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks ";
import {movieActions} from "../store";
import {MovieDetails} from "../components";

const MovieInfoPage = () => {
    const {movieDetails} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    const {movieId} = useParams();

    useEffect(() => {
        dispatch(movieActions.getMovieDetails(+movieId))
    }, [movieId])
    return (
        <div>
            {movieDetails && <MovieDetails movieDetails={movieDetails}/>}
        </div>
    );
};
export {
    MovieInfoPage
};