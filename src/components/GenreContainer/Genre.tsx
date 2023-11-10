import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from './Genre.module.css';
import {UseAppContext} from "../../hooks";

interface IProps {
    genre:IGenre
}
const Genre:FC<IProps> = ({genre}) => {
    const {id,name} = genre;

    const navigate = useNavigate();
    const {setGenre} = UseAppContext();

    const moviesByGenre = (id:number,name:string):void =>{
        navigate(`${id}`);
        setGenre({genre:name});
    }

    return (

        <div className={css.Genre}>
            <span onClick={() => moviesByGenre(id,name)} className={css.Text}>{name}</span>
        </div>

    );
};

export {Genre};