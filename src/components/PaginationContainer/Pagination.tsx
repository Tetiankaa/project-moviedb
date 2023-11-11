import React, {FC, useEffect, useState} from 'react';

import css from "../MoviesContainer/Movies.module.css";

interface IProps {
    setQuery:Function,
    page:string,
    totalPages:number
}
const Pagination:FC<IProps> = ({setQuery,page, totalPages}) => {

    const [pages, setPages] = useState<number[]>([]);
    const [activePage, setActivePage] = useState(+page-1);

    const buildPages =()=>{
        let start = 0;
        let end = 5;

        if (totalPages <= 4) {
            end = totalPages;
        } else if (activePage > 3 && activePage < totalPages - 3) {
            start = activePage - 1;
            end = activePage - 1 + 3;
        } else if (totalPages > 1 && activePage > totalPages - 5) {
            start = totalPages - 5;
            end = totalPages - 1;
        }

        const newPages = [];
        for (let i = start; i < end; i++) {
            newPages.push(i);
        }
        setPages(newPages);

    };

    useEffect(() => {
        setActivePage(+`${+page - 1}`);
        buildPages();
    }, [page,totalPages]);

    useEffect(() => {
        buildPages();
    }, [activePage]);

    const isActive = (page:number) =>(activePage === page ? `${css.ActiveButton}` : `${css.Button}`);


    const previousPage = ()=>{
        setQuery((prev: { set: (arg0: string, arg1: string) => void; get: (arg0: string) => string | number; })=>{
            prev.set('page',`${+prev.get('page')-1}`);
            return prev;
        })

    }

    const nextPage = () =>{
        setQuery((prev: { set: (arg0: string, arg1: string) => void; get: (arg0: string) => string | number; })=>{
            prev.set('page', `${+prev.get('page') + 1}`);
            return prev;
        })
    }
    const changeQuery = (page:number) =>{
        setQuery(((prev: { set: (arg0: string, arg1: string) => void; })=>{
            prev.set('page', `${page+1}`)
            return prev;
        }));
    }

    return (
        <div className={css.Buttons}>
            <button onClick={previousPage} disabled={page === '1'} className={css.Button}>Back</button>
        <ul>
            {activePage>=4 &&<button onClick={()=>changeQuery(0)} className={css.Button}>1</button>}
            {activePage>=4  && <button className={css.Button}>...</button>}
            {pages.map(page=>
               ( <button
                className={isActive(page)}
                onClick={()=> {
                    changeQuery(page);
                }}
                key={page}
                >{page+1}</button>))}
            {activePage< totalPages-4 && <button className={css.Button}>...</button>}
            {totalPages>1 && (
                <button
                className={isActive(totalPages-1)}
                onClick={()=> {
                    changeQuery(totalPages-1);
                }}
                >{totalPages}</button>
            )}
        </ul>
            <button onClick={nextPage} disabled={page === totalPages.toString()} className={css.Button}>Next</button>
        </div>
    );
};

export {Pagination};