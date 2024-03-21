import React from 'react';

import {useSearchParams} from "react-router-dom";
import style from '../Pagination.module.css'

const PaginationForMovie = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = query.get('page')?query.get('page'):'1'

    const next = () => {
        const nextPage = +currentPage + 1;
        setQuery({ page: nextPage.toString() });
    }

    const prev = () => {
        if (+currentPage > 1) {
            const prevPage = +currentPage - 1;
            setQuery({ page: prevPage.toString() });
        }
    }
    return (
        <div className={style.paginationContainer}>
            {+currentPage > 1 && <button onClick={prev} className={style.buttonPagination}>prev</button>}
            <div className={style.currentPageDiv}>{currentPage}</div>
            <button  onClick={next} className={style.buttonPagination}>next</button>
        </div>
    );
};
export {
    PaginationForMovie
};