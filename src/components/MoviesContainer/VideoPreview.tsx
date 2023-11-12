import React, {FC, useEffect, useState} from 'react';
import YouTube from "react-youtube";

import {videoService} from "../../services";
import css from './Movies.module.css';


interface IProps {
    id:number
}
const VideoPreview:FC<IProps> = ({id}) => {
    const [key, setKey] = useState<string>(null);

    useEffect(() => {
        videoService.getById(id).then(({data:{results}})=>{
            if (results){
                setKey(results[0]?.key)
            }else {
                setKey(null);
            }
        })
    }, [id]);

    return (
        <div>
            {key
                ? <YouTube videoId={key} opts={{height:'620',width:'1240'}}/>
                : <p className={css.ErrorText}><span>Trailer is not available...</span></p>
            }
        </div>
    );
};

export {VideoPreview};