import React from 'react'
import { getPagesPagination } from '../../helpers/getPagesPagination';
import './Pagination.scss';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    maxPageLimit: number;
    minPageLimit: number;
    updateMaxPageLimit: (currentMax: number) => void;
    updateMinPageLimit: (currentMin: number) => void;
    updateCurrentPage: (currentPage: number) => void;
}

export default function Pagination({
    totalPages,
    currentPage,
    maxPageLimit,
    minPageLimit,
    updateMaxPageLimit,
    updateMinPageLimit,
    updateCurrentPage }: PaginationProps) {

    let pages = getPagesPagination(totalPages);
    const PAGE_NUMBER_LIMIT = 10;
    const onPrevClick = () => {
        if ((currentPage - 1) % PAGE_NUMBER_LIMIT === 0) {
            updateMaxPageLimit(maxPageLimit - PAGE_NUMBER_LIMIT);
            updateMinPageLimit(minPageLimit - PAGE_NUMBER_LIMIT);
        }
        updateCurrentPage(currentPage - 1);
    }

    const onNextClick = () => {
        if (currentPage + 1 > maxPageLimit) {
            updateMaxPageLimit(maxPageLimit + PAGE_NUMBER_LIMIT);
            updateMinPageLimit(minPageLimit + PAGE_NUMBER_LIMIT);
        }
        updateCurrentPage(currentPage + 1);
    }
    return (
        <section className='pagination'>
            <button onClick={onPrevClick}>Previous</button>
            {minPageLimit >= 1 && <li>...</li>}

            {
                pages.map((page, id) => {
                    return page <= maxPageLimit && page > minPageLimit && (
                        <button
                            className={page === currentPage ? "pagination__active" : ""}
                            onClick={() => updateCurrentPage(id + 1)}
                            key={id}>
                            {page}
                        </button>
                    )
                })
            }
            {pages.length > maxPageLimit && <li>...</li>}
            <button onClick={onNextClick}> Next</button>
        </section >
    )
}

