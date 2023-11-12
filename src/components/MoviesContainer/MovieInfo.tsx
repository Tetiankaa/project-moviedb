import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {PosterPreview} from "./PosterPreview";
import {StarsRating} from "./StarsRating";
import css from './Movies.module.css';
import {VideoPreview} from "./VideoPreview";
import {Reviews} from "./Reviews";
import {UseAppContext} from "../../hooks";
interface IProps {
    film:IMovie
}
const MovieInfo:FC<IProps> = ({film}) => {
    const {id,original_title,poster_path, vote_average,overview,release_date, genres, vote_count,budget,runtime,production_countries} = film;

    const navigate = useNavigate();
    const {setGenre} = UseAppContext();

    const size = 'w500';

    const country = production_countries.length > 0 ? production_countries[0].name : '';

    const isBudget = budget > 0 ? budget : '';

    const moviesByGenre = (id:number,name:string):void =>{
        navigate(`/genres/${id}`);
        setGenre({genre:name});
    }

    return (
        <>
            <div className={css.MovieInfoContainer}>

                <div className={css.InnerContainer}>
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

                        {country
                        ? <p className={css.Info}><i>Country: </i>{country}</p>
                        : ''}

                        {
                            isBudget
                            ? <p className={css.Info}><i>Budget:</i> {budget}$</p>
                            : ''
                        }

                        <p className={css.Genre}><i>Genre: </i>{genres.map((genre, index) => <span
                            key={genre.id} onClick={()=>moviesByGenre(genre.id,genre.name)}>{genre.name}{index !== genres.length - 1 && ', '}</span>)}</p>

                        <p className={css.Info}><i>Runtime:</i> {runtime} min</p>
                        <p className={css.Info}><i>About:</i> {overview}</p>
                    </div>
                </div>

                <div className={css.VideoReviews}>
                    <div>
                        <VideoPreview id={id}/>
                    </div>

                    <div>
                        <Reviews id={id}/>
                    </div>
                </div>

            </div>

        </>
    );
};

export {MovieInfo};