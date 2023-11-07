import React, {FC} from 'react';
import {IMovie} from "../../interfaces";

interface IProps {
    film:IMovie
}
const MovieInfo:FC<IProps> = ({film}) => {
    const {original_title,} = film;
    console.log(film)
    return (
        <div>
            {original_title}
        </div>
    );
};

export {MovieInfo};