import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import style from './MoviesList.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks ";
import {movieActions} from "../../../store";
import {PaginationForMovie} from "../../Paginations";
import {MoviesListCard} from "../MoviesListCard";

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