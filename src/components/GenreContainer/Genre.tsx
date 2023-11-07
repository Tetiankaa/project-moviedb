import React, {FC} from 'react';
import {IGenre} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    genre:IGenre
}
const Genre:FC<IProps> = ({genre}) => {
    const {id,name} = genre;
    const navigate = useNavigate();

    return (
        <div>
            <div onClick={()=>navigate(`${id}`)}>{name}</div>
        </div>
    );
};

export {Genre};