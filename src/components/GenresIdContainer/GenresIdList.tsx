import style from './GenresIdList.module.css'
import {useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks ";
import {movieActions} from "../../store";
import {MoviesListCard} from "../MoviesContainer";
import {PaginationForMovie} from "../Paginations";

const GenresIdList = () => {
    const {movies} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = query.get('page') ? query.get('page') : '1'
    const {genreId} = useParams();

    useEffect(() => {
        dispatch(movieActions.getAllMovieByIDGenres({id: +genreId, page: currentPage}))

    }, [genreId, currentPage])


    return (
        <div>
            <div className={style.moviesListCardDiv}>
                {movies && movies.map(movie => <MoviesListCard key={movie?.id} movie={movie}/>)}
            </div>
            <div className={style.PaginationForMovieDiv}>
                {movies && <PaginationForMovie/>}
            </div>
        </div>
    );
};

export {
    GenresIdList
};