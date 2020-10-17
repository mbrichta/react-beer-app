import React, { useState } from 'react'
import mediumBeer from '../icons/beer-medium.svg'
import weakBeer from '../icons/beer-weak.svg'
import strongBeer from '../icons/beer-strong.svg'
import strongHops from '../icons/hops-strong.svg'
import mediumHops from '../icons/hops-medium.svg'
import weakHops from '../icons/hops-weak.svg'

export default function FilterCard({ filter, inputClass, children }) {
    const [filterData, setFilterData] = useState('all')

    const handleChange = ({ target }) => {
        const { value } = target
        setFilterData(value)
    }
    return (
        <div className="card filter-card">
            <div className="filter-container">
                <div className="filter-text">
                    <p>{children}</p>
                </div>
                <div className="filter">
                    <form id={`filter${filter.toUpperCase()}`} className="filter-form">
                        <label for={`${filter}All`}>
                            <input
                                type="radio"
                                name={`filter-${filter}`}
                                className="filter-all"
                                id={`${filter}All`}
                                value="all"
                                onChange={handleChange}
                            />
                            <span>All</span>
                        </label>
                        <label for={`${filter}Weak`}>
                            <input
                                type="radio"
                                name={`filter-${filter}`}
                                className={inputClass}
                                id={`${filter}Weak`}
                                value="weak"
                                onChange={handleChange}
                            />
                            <img src={filter === "abv" ? weakBeer : weakHops} />
                        </label>
                        <label for={`${filter}Medium`}>
                            <input
                                type="radio"
                                name={`filter-${filter}`}
                                className={inputClass}
                                id={`${filter}Medium`}
                                value="medium"
                                onChange={handleChange}
                            />
                            <img src={filter === "abv" ? mediumBeer : mediumHops} />
                        </label>
                        <label for={`${filter}Strong`}>
                            <input
                                type="radio"
                                name={`filter-${filter}`}
                                className={inputClass}
                                id={`${filter}Strong`}
                                value="strong"
                                onChange={handleChange}
                            />
                            <img src={filter === "abv" ? strongBeer : strongHops} />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}