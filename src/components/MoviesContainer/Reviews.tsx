import React, {FC, useEffect, useState} from 'react';

import {reviewService} from "../../services";
import {IReview} from "../../interfaces/reviewInterface";


interface IProps {
    id:number
}
const Reviews:FC<IProps>  = ({id}) => {

    const [reviews, setReviews] = useState<IReview[]>([]);

        useEffect(() => {
        reviewService.getById(id).then(({data:{results}})=>setReviews(results))
    }, [id]);
    console.log(reviews)
    return (
        <div>

        </div>
    );
};

export {Reviews};