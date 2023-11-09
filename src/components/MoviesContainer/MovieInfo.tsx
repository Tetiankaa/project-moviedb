import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {PosterPreview} from "./PosterPreview";
import {StarsRating} from "./StarsRating";
import css from './Movies.module.css';
interface IProps {
    film:IMovie
}
const MovieInfo:FC<IProps> = ({film}) => {
    const {original_title,poster_path, vote_average,overview,release_date, genre_ids, vote_count} = film;
    const size = 'w500';

    return (
             <div className={css.MovieInfoContainer}>
                 <div className={css.Poster}>
                     <PosterPreview poster_path={poster_path} original_title={original_title} size={size}/>
                     <StarsRating vote_average={vote_average} size={50}/>
                    </div>

                <div className={css.MovieInfo}>

                <p className={css.OriginalTitle}>{original_title}</p>
                <p className={css.Info}><i>Release date: </i>{release_date}</p>
                <p className={css.Info}><i>Genre:</i> {genre_ids}</p>
                <p className={css.Info}><i>About:</i> {overview}</p>
                </div>

            </div>
    );
};

export {MovieInfo};