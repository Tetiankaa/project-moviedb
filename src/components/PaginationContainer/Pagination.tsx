import React, {FC, useCallback, useEffect, useState} from 'react';
import css from "../MoviesContainer/Movies.module.css";

interface IProps {
    setQuery:Function,
    page:string,
    maxPages:number
}
const Pagination:FC<IProps> = ({setQuery,page, maxPages}) => {

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
    const [pages, setPages] = useState<number[]>([]);
    const [activePage, setActivePage] = useState(1);

    const buildPages = useCallback(()=>{
        let start = 0;
        let end = 15;

        if (activePage > 13 && activePage< maxPages - 13 ){
            start = activePage - 4;
            end = activePage - 4 + 9;
        }

        if (maxPages > 1 && activePage > maxPages - 13){
            start = maxPages - 13;
            end  = maxPages - 1;
        }

        const newPages = [];
        for (let i = start; i < end; i++) {
            newPages.push(i);
        }
        setPages(newPages);
    },[activePage]);

    const onChange = (page:number)=> {
        setActivePage(page);
        setQuery(((prev: { set: (arg0: string, arg1: string) => void; })=>{
            prev.set('page', `${page+1}`)
            return prev
        }));
    };
    const isActive = (page:number) =>(activePage === page ? 'active' :'');

    useEffect(() => {
        buildPages();
    }, [activePage]);
    return (
        <div className={css.Buttons}>
            <button onClick={previousPage} disabled={page === '1'} className={css.Button}>Back</button>
        <ul>
            {activePage>=14 && <button onClick={()=>onChange(0)}>1</button>}
            {activePage>=14 && <span>...</span>}
            {pages.map(page=>
               ( <button
                className={isActive(page)}
                onClick={()=>onChange(page)}
                key={page}
                >{page+1}</button>))}
            {activePage< maxPages-13 && <span>...</span>}
            {maxPages>1 && (
                <button
                className={isActive(maxPages-1)}
                onClick={()=>onChange(maxPages-1)}
                >{maxPages}</button>
            )}
        </ul>
            <button onClick={nextPage} disabled={page === maxPages.toString()} className={css.Button}>Next</button>
        </div>
    );
};

export {Pagination};