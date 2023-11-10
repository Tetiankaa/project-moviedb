import React, {FC, useEffect, useState} from 'react';

import {IPoster} from "../../interfaces";
import {posterService} from "../../services";

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
              return <img src={'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg'} alt={'no image available'} style={{borderRadius:10,width:250}}/>;
          }
      }

    return isImage(poster_path)
};

export {PosterPreview};