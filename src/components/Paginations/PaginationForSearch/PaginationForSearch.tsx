import React from 'react';
import {useSearchParams} from "react-router-dom";

import style from "../Pagination.module.css";

const PaginationForSearch = () => {
    const [query, setQuery] = useSearchParams({query: '', page: '1'});
    const currentPage = query.get('page') ? query.get('page') : '1'
    const currentQuery = query.get('query') ? query.get('query') : ''

    const next = () => {
        const nextPage = +currentPage + 1;
        setQuery({query: currentQuery, page: nextPage.toString()});
    }

    const prev = () => {
        if (+currentPage > 1) {
            const prevPage = +currentPage - 1;
            setQuery({query: currentQuery, page: prevPage.toString()});
        }
    }
    return (
        <div className={style.paginationContainer}>
            {+currentPage > 1 ? (
                <button onClick={prev} className={style.buttonPagination}>prev</button>
            ) : (
                <button disabled className={`${style.buttonPagination} ${style.disabledButton}`}>prev</button>
            )}
            <div className={style.currentPageDiv}>{currentPage}</div>
            <button onClick={next} className={style.buttonPagination}>next</button>
        </div>
    );
};

export {PaginationForSearch};