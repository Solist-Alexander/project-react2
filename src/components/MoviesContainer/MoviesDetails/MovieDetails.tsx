import {Rating} from "@mui/material";
import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import style from './MovieDetails.module.css'
import {MovieDetailsGenres} from "./MovieDetailsGenres";
import {IMovieDetails} from "../../../interfaces ";

interface IProps extends PropsWithChildren {
    movieDetails: IMovieDetails
}

const MovieDetails: FC<IProps> = ({movieDetails}) => {
    const {id, genres, vote_average, original_language, title, poster_path, overview, release_date} = movieDetails
    const navigate = useNavigate()


    return (
        <div className={style.mainDiv}>
            <div className={style.movieDetailsContainer}>
                <div>
                    {poster_path ? (
                        <img className={style.img} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${title}`}/>
                    ) : (
                        <img  src="https://avatanplus.com/files/resources/mid/577e3ef8cdf33155c525fc0c.png" alt="No poster"/>
                    )}
                </div>
                <div className={style.movieInfoDiv}>
                    <p><b>Original Title:</b> {title}</p>
                    <p><b>Original Language: :</b> {original_language}</p>
                    <p><b>Vote Average:</b></p>
                    <Rating name="customized-10" defaultValue={vote_average} max={10} precision={0.5}
                            style={{fontSize: "35px"}}/>
                    <p><b>Overview:</b> {overview}</p>
                    <p><b>Release Date:</b> {release_date}</p>
                    <p><b>Genres:</b></p>
                    <div className={style.genresContainer}>
                        {genres.map(genre => <MovieDetailsGenres genre={genre} key={genre.id}/>)}
                    </div>
                </div>

            </div>

            <button onClick={() => navigate(-1)} className={style.buttonBack}>back</button>
        </div>
    );
};

export  {MovieDetails};