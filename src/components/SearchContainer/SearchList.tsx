import React, {ChangeEvent, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import style from '../MoviesContainer/MoviesList/MoviesList.module.css';
import {MoviesListCard} from '../MoviesContainer/MoviesListCard/MoviesListCard';
import {PaginationForSearch} from '../../Paginations/PaginationForSearch/PaginationForSearch';
import {useAppSelector} from "../../hooks /useAppSelector";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks /useAppDispatch";
import {searchActions} from "../../store/slices/searchSlice";

const SearchList = () => {

    const {resultSearch} = useAppSelector(state => state.searches)
    const dispatch = useAppDispatch();


    const [query, setQuery] = useSearchParams({query: '', page: '1'});
    const currentPage = query.get('page') ? query.get('page') : '1'
    const {reset, handleSubmit} = useForm()
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery({query: event.target.value, page: '1'});
    };


    useEffect(() => {
        dispatch(searchActions.getAllMovieBySearch({query: query.get('query'), page: currentPage}));
    }, [currentPage]);


    const search = async (formData: any) => {
        dispatch(searchActions.getAllMovieBySearch({query: query.get('query'), page: currentPage}))
        reset()
    }

    return (
        <div>
            <div className={style.formContainer}>
                <form onSubmit={handleSubmit(search)}>
                    <input type="text" placeholder={'Поиск'} name="query" className={style.inputSearch}
                           onChange={handleInputChange}/>
                </form>
            </div>
            <div className={style.moviesListCardDiv}>
                {resultSearch && resultSearch.map(movie => <MoviesListCard key={movie?.id} movie={movie}/>)}
            </div>
            <div className={style.PaginationForMovieDiv}>
                {resultSearch && resultSearch.length > 0 && <PaginationForSearch/>}
            </div>

        </div>
    );
};


export {SearchList};
