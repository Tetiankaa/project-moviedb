import React, {useEffect, useState} from 'react';

import {IGenre} from "../../interfaces";
import {genresService} from "../../services";
import {Genre} from "./Genre";

const GenreBadge = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        genresService.getAll().then(({data:{genres}})=>setGenres(genres))
    }, []);

    return (
        <div>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenreBadge};