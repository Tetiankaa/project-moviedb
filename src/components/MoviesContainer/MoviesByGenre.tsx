import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {faFilm} from "@fortawesome/free-solid-svg-icons";

import {IGenre, IMovie} from "../../interfaces";
import {moviesService} from "../../services";
import css from './Movies.module.css';
import {MoviesListCard} from "./index";
import {Pagination} from "../PaginationContainer";
import {useAppLocation} from "../../hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MoviesByGenre = () => {
    const {id} = useParams();
    const {state:{name}} = useAppLocation<IGenre>();

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);

    const [query, setQuery] =  useSearchParams({page:"1"})
    const page:string = query.get('page');


    useEffect(() => {
        if (id !== undefined){
            moviesService.getByGenreId(id, page).then(({data:{results,total_pages}})=> {
                setMovies(results);

                if (total_pages<=500){
                    setTotalPages(total_pages);
                }else {
                    setTotalPages(500);
                }
            })
        }
    }, [id, page]);
    return (
        <>
            <div className={css.GenreHeader}><h1><FontAwesomeIcon icon={faFilm}/> {name}</h1></div>
            <hr/>
            <div className={css.Movies}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

            <div>
                <Pagination setQuery={setQuery} page={page} maxPages={totalPages}/>
            </div>
        </>



    );
};

export {MoviesByGenre};