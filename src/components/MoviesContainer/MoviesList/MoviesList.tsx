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
    const page = query.get('page');

    useEffect(()=>{
       dispatch(movieActions.getAll(page))

    },[page])


    return (
        <div className={style.moviesListCardDiv}>
            {movies.map(movie =><MoviesListCard movie={movie} key={movie.id}/>)}
            {/*{movies && <PaginationForMovie/>}*/}
        </div>
    );
};

export {
    MoviesList
};