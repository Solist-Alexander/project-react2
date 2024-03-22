import {useAppDispatch} from "../../../hooks /useAppDispatch";
import {useAppSelector} from "../../../hooks /useAppSelector";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {movieActions} from "../../../store/slices/movieSlice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import style from './MoviesList.module.css'
import {PaginationForMovie} from "../../../Paginations/PaginationForMovie/PaginationForMovie";

const MoviesList = () => {
    const {movies} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = query.get('page') ? query.get('page') : '1'


    useEffect(() => {
        dispatch(movieActions.getAll(currentPage))

    }, [currentPage])


    return (
        <div>
            <div className={style.mainContainer}>
                <div className={style.moviesListCardDiv}>
                    {movies && movies.map(movie => <MoviesListCard key={movie?.id} movie={movie}/>)}
                </div>
                <div className={style.PaginationForMovieDiv}>
                    {movies && <PaginationForMovie/>}
                </div>
            </div>
        </div>
    );
};

export {
    MoviesList
};