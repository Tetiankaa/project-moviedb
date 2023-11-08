import React, {FC, useEffect, useState} from 'react';

import {IPoster} from "../../interfaces";
import {posterService} from "../../services";

interface IProps {
    poster_path:string,
    original_title:string
}
const PosterPreview:FC<IProps> = ({poster_path,original_title}) => {

    const [url, setUrl] = useState<IPoster>( {secure_base_url: null});

    useEffect(() => {
        posterService.getPoster().then(({data:{images:{secure_base_url}}})=>setUrl({secure_base_url}));
    }, []);

    const size = `w185`;

    const imageURL = `${url.secure_base_url}${size}${poster_path}`;

    return <img src={imageURL} alt={original_title} style={{borderRadius:10}}/>
};

export {PosterPreview};