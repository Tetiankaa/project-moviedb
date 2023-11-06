import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {StarsRating} from "./StarsRating";

interface IProps {
    movie:IMovie
}
const MoviesListCard:FC<IProps> = ({movie}) => {

    const {original_title, poster_path, vote_average} = movie;

    return (
        <div>
            <p>{original_title}</p>

            <StarsRating vote_average={vote_average}/>
        </div>
    );
};

export {MoviesListCard};