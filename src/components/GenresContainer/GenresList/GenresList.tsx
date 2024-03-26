import style from './GenresList.module.css'
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks ";
import {genreActions} from "../../../store";
import {Genre} from "../Genre";

const GenresList = () => {
    const {genres} = useAppSelector(state => state.genres)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [])

    return (
        <div className={style.genreListContainer}>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    GenresList
};