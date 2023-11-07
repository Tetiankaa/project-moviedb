import React, {useEffect, useState} from 'react';
import {MovieInfo} from "../components";
import {useParams} from "react-router-dom";
import {useAppLocation} from "../hooks";
import {IMovie} from "../interfaces";
import {moviesService} from "../services";

const MoviePage = () => {
    const {id} = useParams();

    const appLocation = useAppLocation<{ movie: IMovie }>();

    const [film, setFilm] = useState<IMovie | null>(null);

    useEffect(() => {

        if (appLocation?.state?.movie){
            setFilm(appLocation.state.movie);
        }else if(id !== undefined){
            moviesService.getById(id).then(({data})=>setFilm(data))
        }
    }, [id, appLocation]);

    return (
        <div>
            {film && <MovieInfo film={film}/>}
        </div>
    );
};

export {MoviePage};