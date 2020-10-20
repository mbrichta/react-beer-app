import React, { useContext } from 'react'
import { Context } from '../context'

export default function Pagination() {
    const { beerData, page, handlePagination } = useContext(Context)

    return (
        <div className="card filter-card">
            <div className="filter-container">
                <div className="filter-text">
                    <p>Page: {page}<span id="pageNumber"></span></p>
                </div>
                <div className="filter">
                    <button
                        onClick={() => handlePagination(-1)}
                        id="prevPage"
                        className="page-btn"
                        disabled={page === 1 ? true : false}
                    >
                        <i className="far fa-caret-square-left"></i>
                    </button>
                    <button
                        onClick={() => handlePagination(1)}
                        id="nextPage"
                        className="page-btn"
                        disabled={beerData < 25 ? true : false}
                    >
                        <i className="far fa-caret-square-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}