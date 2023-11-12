import React, {FC, useEffect, useState} from 'react';

import {IPoster} from "../../interfaces";
import {posterService} from "../../services";
import no_image from './images/no_image.jpg';

interface IProps {
    poster_path:string,
    original_title:string,
    size:string
}
const PosterPreview:FC<IProps> = ({poster_path,original_title,size}) => {

    const [url, setUrl] = useState<IPoster>( {secure_base_url: null});

    useEffect(() => {
        posterService.getPoster().then(({data:{images:{secure_base_url}}})=>setUrl({secure_base_url}));
    }, []);


      const imageURL = `${url.secure_base_url}${size}${poster_path}`;

      const isImage = (poster_path:string) =>{
          if (poster_path){
              return <img src={imageURL} alt={original_title} style={{borderRadius:10}}/>
          } else {
              return <img src={no_image} alt={'not available'} style={{borderRadius:10,width:250}}/>;
          }
      }

    return isImage(poster_path);
};

export {PosterPreview};