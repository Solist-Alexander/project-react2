import {MovieDetails} from "../components/MoviesContainer/MoviesDetails/MovieDetails";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../hooks /useAppSelector";
import {useAppDispatch} from "../hooks /useAppDispatch";
import {movieActions} from "../store/slices/movieSlice";

const MovieInfoPage = () => {
    const {movieDetails} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    const {movieId} = useParams();


    useEffect(()=>{
        dispatch(movieActions.getMovieDetails(+movieId))
    },[movieId])
    return (
        <div>
            {movieDetails && <MovieDetails movieDetails={movieDetails}/>}
        </div>
    );
};
export {
    MovieInfoPage
};