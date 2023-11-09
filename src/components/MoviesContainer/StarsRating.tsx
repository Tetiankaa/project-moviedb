import React, {FC} from 'react';
import {Rating} from "react-simple-star-rating";

interface IProps{
    vote_average:number,
    size:number
}
const StarsRating:FC<IProps> = ({vote_average,size}) => {

    return (
        <div>
            <Rating readonly={true} initialValue={vote_average/2} allowFraction={true} iconsCount={5} size={size}/>
        </div>
    );
};

export {StarsRating};