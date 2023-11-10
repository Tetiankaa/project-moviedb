import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {StarsRating} from "./StarsRating";
import {PosterPreview} from "./PosterPreview";
import css from './Movies.module.css';


interface IProps {
    movie:IMovie
}
const MoviesListCard:FC<IProps> = ({movie}) => {
    const {original_title, poster_path, vote_average,id} = movie;
    const navigation = useNavigate();
    const size = `w185`;

    return (
        <div className={css.MovieContainer}>
            <div className={css.Movie} onClick={()=>navigation(`/movies/${id}`)}>

                <PosterPreview poster_path={poster_path} original_title={original_title} size={size}/>
                <p>{original_title}</p>
                <StarsRating vote_average={vote_average} size={22}/>
            </div>
        </div>
    );
};

export {MoviesListCard};