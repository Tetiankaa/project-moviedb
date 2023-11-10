import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {PosterPreview} from "./PosterPreview";
import {StarsRating} from "./StarsRating";
import css from './Movies.module.css';
import {VideoPreview} from "./VideoPreview";
import {Reviews} from "./Reviews";
interface IProps {
    film:IMovie
}
const MovieInfo:FC<IProps> = ({film}) => {
    const {id,original_title,poster_path, vote_average,overview,release_date, genres, vote_count,budget,runtime,production_countries:[{name:country}]} = film;
    const size = 'w500';

    return (
             <div className={css.MovieInfoContainer}>

                 <div className={css.Poster}>
                     <PosterPreview poster_path={poster_path} original_title={original_title} size={size}/>

                     <div className={css.StarsRating}>
                         <StarsRating vote_average={vote_average} size={50}/>
                        <p>{vote_count} votes</p>
                     </div>
                 </div>

                <div className={css.MovieInfo}>
                <p className={css.OriginalTitle}>{original_title}</p>
                <p className={css.Info}><i>Release date: </i>{release_date}</p>
                <p className={css.Info}><i>Country: </i>{country}</p>
                <p className={css.Info}><i>Budget:</i> {budget}$</p>
                <p className={css.Info}><i>Genre: </i>{genres.map((genre,index)=><span key={genre.id}>{genre.name}{index !== genres.length-1 && '|'}</span>)}</p>
                <p className={css.Info}><i>Runtime:</i> {runtime} min</p>
                <p className={css.Info}><i>About:</i> {overview}</p>
                </div>
<hr/>

                 <div>
                     <VideoPreview id={id}/>
                 </div>

                 <div>
                     <Reviews id={id}/>
                 </div>
            </div>
    );
};

export {MovieInfo};