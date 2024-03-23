import React, { ChangeEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { movieActions } from '../../store/slices/movieSlice';
import style from '../MoviesContainer/MoviesList/MoviesList.module.css';
import { MoviesListCard } from '../MoviesContainer/MoviesListCard/MoviesListCard';
import { PaginationForSearch } from '../../Paginations/PaginationForSearch/PaginationForSearch';
import {useAppSelector} from "../../hooks /useAppSelector";

const SearchList = () => {
    const { movies: moviesFromStore, resultSearch: resultSearchFromStore } = useAppSelector(
        (state) => state.movies
    );
    const dispatch = useDispatch();
    const { reset, handleSubmit } = useForm();

    useEffect(() => {
        // Fetch initial data
        dispatch(movieActions.getAllMovieBySearch({ query: '', page: '1' }));
    }, []);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        dispatch(movieActions.getAllMovieBySearch({ query, page: '1' }));
    };

    const search = async (formData: any) => {
        const query = formData.query;
        dispatch(movieActions.getAllMovieBySearch({ query, page: '1' }));
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input
                    type="text"
                    placeholder="Поиск"
                    name="query"
                    className={style.inputSearch}
                    onChange={handleInputChange}
                />
            </form>

            <div className={style.moviesListCardDiv}>
                {resultSearchFromStore.map((movie: any) => ( // Добавлен явный тип any
                    <MoviesListCard key={movie?.id} movie={movie} />
                ))}
            </div>

            <div className={style.PaginationForMovieDiv}>
                {moviesFromStore && <PaginationForSearch />}
            </div>
        </div>
    );
};

export { SearchList };
