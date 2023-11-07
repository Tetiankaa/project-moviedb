import React, {FC} from 'react';
import {IMovie} from "../../interfaces";

interface IProps {
    movie:IMovie
}
const FoundMovies:FC<IProps> = ({movie}) => {
        const {original_title} = movie;
    return (
        <div>
            {original_title}
        </div>
    );
};

export {FoundMovies};