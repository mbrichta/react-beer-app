import React from 'react'

export default function Pagination() {
    return (
        <div className="card filter-card">
            <div className="filter-container">
                <div className="filter-text">
                    <p>Page: <span id="pageNumber"></span></p>
                </div>
                <div className="filter">
                    <button id="prevPage" className="page-btn" disabled>
                        <i class="far fa-caret-square-left"></i>
                    </button>
                    <button id="nextPage" className="page-btn" disabled>
                        <i class="far fa-caret-square-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}