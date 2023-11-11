import React, {FC} from 'react';

import {IReview} from "../../interfaces/reviewInterface";
import css from './Movies.module.css';

interface IProps {
    review:IReview
}
const Review:FC<IProps> = ({review}) => {

    const {author,created_at,content} = review;

    const dateObject  = new Date(created_at);

    const date = dateObject.toLocaleDateString();
    const time = dateObject.toLocaleTimeString();

    return (
        <div className={css.Review}>
            <p className={css.Author}>{author}</p>
            <p className={css.Date}>{date} {time}</p>
            <p className={css.Content}>{content}</p>
        </div>
    );
};

export {Review};