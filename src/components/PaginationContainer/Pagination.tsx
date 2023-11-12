import React, {FC, useEffect, useState} from 'react';

import css from "../MoviesContainer/Movies.module.css";

interface IProps {
    setQuery: Function,
    page: string,
    totalPages: number
}

const Pagination: FC<IProps> = ({setQuery, page, totalPages}) => {

    const [pages, setPages] = useState<number[]>([]);
    const [activePage, setActivePage] = useState(+page - 1);

    const buildPages = () => {
        const newPages = [];

        if (totalPages <= 5) {
            for (let i = 0; i < totalPages; i++) {
                newPages.push(i);
            }
        } else {
            const maxVisiblePages = 5;
            let start = Math.max(0, Math.min(totalPages - maxVisiblePages, activePage - Math.floor(maxVisiblePages / 2)));
            let end;

            if (activePage === totalPages - maxVisiblePages) {
                end = Math.min(totalPages, start + maxVisiblePages) + 1;
            } else {
                end = Math.min(totalPages, start + maxVisiblePages);
            }

            for (let i = start; i < end; i++) {
                newPages.push(i);
            }
        }

        setPages(newPages);


    };

    useEffect(() => {
        setActivePage(+`${+page - 1}`);
        buildPages();
    }, [page, totalPages]);

    useEffect(() => {
        buildPages();
    }, [activePage]);

    const isActive = (page: number) => (activePage === page ? `${css.ActiveButton}` : `${css.Button}`);


    const previousPage = () => {
        setQuery((prev: { set: (arg0: string, arg1: string) => void; get: (arg0: string) => string | number; }) => {
            prev.set('page', `${+prev.get('page') - 1}`);
            return prev;
        })

    }

    const nextPage = () => {
        setQuery((prev: { set: (arg0: string, arg1: string) => void; get: (arg0: string) => string | number; }) => {
            prev.set('page', `${+prev.get('page') + 1}`);
            return prev;
        })
    }
    const changeQuery = (page: number) => {
        setQuery(((prev: { set: (arg0: string, arg1: string) => void; }) => {
            prev.set('page', `${page + 1}`)
            return prev;
        }));
    }

    return (
        <div className={css.Buttons}>

            <button onClick={previousPage} disabled={page === '1'} className={css.Button}>Back</button>

            <ul>
                {totalPages >= 1 && (
                    <>
                        {activePage >= 3 && pages[0] !== 0 &&
                            <button onClick={() => changeQuery(0)} className={css.Button}>1</button>}
                        {activePage >= 3 && pages[0] > 1 && <button className={css.Button}>...</button>}

                        {pages.map(page => (
                            <button
                                className={isActive(page)}
                                onClick={() => {
                                    changeQuery(page);
                                }}
                                key={page}
                            >
                                {page + 1}
                            </button>
                        ))}
                        {totalPages > 5 && activePage < totalPages - 5 && <button className={css.Button}>...</button>}
                        {(totalPages > 5 && activePage < totalPages - 3) && (
                            <button
                                className={isActive(totalPages - 1)}
                                onClick={() => {
                                    changeQuery(totalPages - 1);
                                }}
                            >
                                {totalPages}
                            </button>
                        )}
                    </>
                )}
            </ul>

            <button onClick={nextPage} disabled={page === totalPages.toString()} className={css.Button}>Next</button>

        </div>
    );
};

export {Pagination};