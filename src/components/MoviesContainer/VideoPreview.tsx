import React, {FC, useEffect, useState} from 'react';
import YouTube from "react-youtube";

import {videoService} from "../../services";

interface IProps {
    id:number
}
const VideoPreview:FC<IProps> = ({id}) => {
    const [key, setKey] = useState<string>(null);

    useEffect(() => {
        videoService.getById(id).then(({data:{results}})=>{
            if (results){
                setKey(results[0].key)
            }else {
                setKey(null);
            }
        })
    }, [id]);

    return (
        <div>
            {key
                ? <YouTube videoId={key}></YouTube>
                : <h1>Trailer is not available...</h1>
            }
        </div>
    );
};

export {VideoPreview};