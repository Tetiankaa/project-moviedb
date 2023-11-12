import React, {FC, useEffect, useState} from 'react';
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {reviewService} from "../../services";
import {IReview} from "../../interfaces";
import {Review} from "./Review";
import css from './Movies.module.css';


interface IProps {
    id:number
}
const Reviews:FC<IProps>  = ({id}) => {

    const [reviews, setReviews] = useState<IReview[]>([]);

        useEffect(() => {
        reviewService.getById(id).then(({data:{results}})=>setReviews(results))
    }, [id]);


    return (
        <div>
            <p className={css.ReviewsText}><FontAwesomeIcon icon={faComments}/> Reviews</p>

            <div className={css.Line}></div>

            {reviews.length > 0
                ? reviews.map(review=><Review key={review.id} review={review}/>)
                : <h1 className={css.ReviewsErrorText}>There aren't any reviews for this movie yet!</h1>
            }
        </div>
    );
};

export {Reviews};