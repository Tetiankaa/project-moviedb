import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";
import css from './Movies.module.css';
import {MoviesListCard} from "./index";

const MoviesByGenre = () => {
    const {id} = useParams();

    const [movies, setMovies] = useState<IMovie[]>([]);

    const [query, setQuery] =  useSearchParams({page:"1"})
    const page:string = query.get('page') || '1';

    useEffect(() => {
        if (id !== undefined){
            moviesService.getByGenreId(id, page).then(({data:{results}})=>setMovies(results))
        }
    }, [id]);
    return (
        <div className={css.Movies}>
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesByGenre};