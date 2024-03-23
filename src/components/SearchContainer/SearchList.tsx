import React, {ChangeEvent, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import style from '../MoviesContainer/MoviesList/MoviesList.module.css';
import { MoviesListCard } from '../MoviesContainer/MoviesListCard/MoviesListCard';
import { PaginationForSearch } from '../../Paginations/PaginationForSearch/PaginationForSearch';
import {useAppSelector} from "../../hooks /useAppSelector";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks /useAppDispatch";
import {movieActions} from "../../store/slices/movieSlice";
const SearchList = () => {
    // const [isFormActive, setIsFormActive] = useState<boolean>(false);

    const { resultSearch, isFormActive} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    const [isInitialRender, setIsInitialRender] = useState(true);

    const [query, setQuery] = useSearchParams({query: '', page: '1'});
    const currentPage = query.get('page') ? query.get('page') : '1'
    const { reset, handleSubmit} = useForm()
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery({ query: event.target.value, page: '1' });
    };




    // useEffect(()=>{
    //     dispatch(movieActions.getAllMovieBySearch({query: query.get('query'), page: currentPage}))
    // },[ currentPage])


    useEffect(() => {
        if (!isInitialRender) {
            dispatch(movieActions.getAllMovieBySearch({query: query.get('query'), page: currentPage}));
        } else {
            setIsInitialRender(false);
        }
    }, [currentPage]);


    const search = async (formData: any) => {
        dispatch(movieActions.getAllMovieBySearch({query: query.get('query'), page: currentPage}))
            reset()
    }

    console.log()
    return (
        <div>
            <form onSubmit={handleSubmit(search)} >
                <input type="text" placeholder={'Поиск'} name="query" className={style.inputSearch} onChange={handleInputChange}/>
            </form>

            <div className={style.moviesListCardDiv}>
                {resultSearch && resultSearch.map(movie => <MoviesListCard key={movie?.id} movie={movie}/>)}
            </div>
            <div className={style.PaginationForMovieDiv}>
                {isFormActive && <PaginationForSearch/>}
            </div>

        </div>
    );
};


export { SearchList };
