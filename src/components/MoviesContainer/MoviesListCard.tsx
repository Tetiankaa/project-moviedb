import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {StarsRating} from "./StarsRating";
import {PosterPreview} from "./PosterPreview";
import css from './Movies.module.css';
import {useNavigate} from "react-router-dom";

interface IProps {
    movie:IMovie
}
const MoviesListCard:FC<IProps> = ({movie}) => {
    const {original_title, poster_path, vote_average,id} = movie;
    const navigation = useNavigate();

    return (
        <div className={css.MovieContainer} onClick={()=>navigation(`/movies/${id}`, {state:{movie}})}>
            <div className={css.Movie}>
                <PosterPreview poster_path={poster_path} original_title={original_title}/>
                <p>{original_title}</p>
                <StarsRating vote_average={vote_average}/>
            </div>
        </div>
    );
};

export {MoviesListCard};