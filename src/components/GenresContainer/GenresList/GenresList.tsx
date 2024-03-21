import {Genre} from "../Genre/Genre";
import style from './GenresList.module.css'
import {useEffect} from "react";
import {useAppDispatch} from "../../../hooks /useAppDispatch";
import {useAppSelector} from "../../../hooks /useAppSelector";
import {genreActions} from "../../../store/slices/genreSlice";
const GenresList = () => {
    const {genres} = useAppSelector(state => state.genres)

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(genreActions.getAll())
    },[])

    return (
        <div className={style.genreListContainer}>
            {genres && genres.map(genre =><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    GenresList
};