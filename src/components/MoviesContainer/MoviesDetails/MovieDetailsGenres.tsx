import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import style from './MovieDetails.module.css'
import {IGenre} from "../../../interfaces ";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const MovieDetailsGenres: FC<IProps> = ({genre}) => {
    const {id, name} = genre
    const navigate = useNavigate()

    return (
        <div >
            <button className={style.buttonGenre} onClick={() => navigate(`/genres/${id}`, {state: {genre}})}>{name}</button>
        </div>
    );
};
export {
    MovieDetailsGenres
};
