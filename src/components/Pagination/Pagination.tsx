import React from 'react'
import './Pagination.scss';

interface PaginationProps {
    totalPost: number;
    postsPerPage: number;
    currentPage: number;
    updateCurrentPage: (currentPage: number) => void;
}

export default function Pagination({ totalPost, postsPerPage, currentPage, updateCurrentPage }: PaginationProps) {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
        pages.push(i);
    }
    const next = () => {
        if (currentPage === Math.ceil(totalPost / postsPerPage)) return;
        updateCurrentPage(currentPage + 1);

    }
    const previous = () => {
        if (currentPage === 1) return;
        updateCurrentPage(currentPage - 1);

    }


    return (
        <section className='pagination'>
            <button /* onClick={previous} */>Previous</button>
            {/*    {pages.map((page, id) => {
                return (

                    <div className="pagination__items" key={id + 1}>
                        <button className={page === currentPage ? "pagination__active" : ""} onClick={() => updateCurrentPage(id + 1)}>{page}</button>
                    </div>
                )
            })
            } */}
            <button /* onClick={next} */> Next</button>
        </section >
    )

}
