import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";
import {MovieInfo} from "./MovieInfo";

const Movie = () => {
    const {id} = useParams();

    const [film, setFilm] = useState<IMovie | null>(null);

    useEffect(() => {
        moviesService.getById(id).then(({data})=>setFilm(data))
    }, [id]);

    return (
        <div>
            {film && <MovieInfo film={film} key={film.id}/>}
        </div>
    );
};

export {Movie};