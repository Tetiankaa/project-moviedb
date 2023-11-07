import React, {useEffect, useState} from 'react';
import {IMovie} from "../../interfaces";
import {useSearchParams} from "react-router-dom";
import {moviesService} from "../../services";
import {MoviesListCard} from "./MoviesListCard";
import css from './Movies.module.css';

const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

     const [query, setQuery] =  useSearchParams({page:"1"})
     const page:string = query.get('page') || '1';

    useEffect(() => {
        moviesService.getAll(page).then(({data})=>setMovies(data.results))
    }, [query]);

    return (
        <div className={css.Movies}>
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};