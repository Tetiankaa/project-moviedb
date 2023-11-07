import React, {useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IMovie, ISearch} from "../../interfaces";
import {searchService} from "../../services";
import {useSearchParams} from "react-router-dom";
import {FoundMovies} from "./FoundMovies";

const SearchForm = () => {
    const [foundedMovies, setFoundedMovies] = useState<IMovie[]>([])

    const {register, handleSubmit} = useForm<ISearch>();

    const [query, setQuery] = useSearchParams({page: "1"})
    const page: string = query.get('page') || '1';

    const [value, setValue] = useState<ISearch | null>(null);

    const submit: SubmitHandler<ISearch> =  (value) => {
        setValue(value);
    }
    const fetchMovies = (value: ISearch | null, page: string) => {
        if (value) {
            searchService.getAll(value, page).then(({ data: { results } }) => setFoundedMovies(results));
        }
    };

    useEffect(() => {
       fetchMovies(value, page)

    }, [value, page]);

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <input type="search" {...register('search')}/>
                <button type={"submit"}>Search</button>
            </form>
            {foundedMovies.map(movie=><FoundMovies movie={movie} key={movie.id}/>)}
        </>
    );
};

export {SearchForm};