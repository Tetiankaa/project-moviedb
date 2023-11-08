import React, {useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IMovie, ISearch} from "../../interfaces";
import {searchService} from "../../services";
import {useSearchParams} from "react-router-dom";
import {MoviesList, MoviesListCard} from "../MoviesContainer";
import css from '../MoviesContainer/Movies.module.css'

const SearchForm = () => {
    const [foundedMovies, setFoundedMovies] = useState<IMovie[]>([]);
    const [totalResults, setTotalResults] = useState<number | null>(null);
    const [initialMovieList, setInitialMovieList] = useState<boolean>(true);
    const [value, setValue] = useState<ISearch | null>(null);

    const {register, handleSubmit} = useForm<ISearch>();

    const [query, setQuery] = useSearchParams({page: "1"})
    const page: string = query.get('page') || '1';

    const submit: SubmitHandler<ISearch> =  (value) => {
        setValue(value);
        setInitialMovieList(false);
    }

    useEffect(() => {
        if (value) {
            searchService.getAll(value, page).then(({ data: { results,total_results } }) => {
                setFoundedMovies(results);
                setTotalResults(total_results);
            });
        }

    }, [value, page]);

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <input type="search" {...register('search')}/>
                <button type={"submit"}>Search</button>
            </form>

            <div className={css.Movies}>
                {
                    initialMovieList
                    ? <MoviesList/>
                    :
                        totalResults === 0
                        ? (<h1>No movies were found</h1>)

                        : (foundedMovies.map(movie => <MoviesListCard movie={movie} key={movie.id}/>))


                }
            </div>
        </>
    );
};

export {SearchForm};