import React, { useState } from 'react'
import { ReactComponent as MediumBeer } from '../icons/beer-medium.svg'
import { ReactComponent as WeakBeer } from '../icons/beer-weak.svg'
import { ReactComponent as StrongBeer } from '../icons/beer-strong.svg'
import { ReactComponent as StrongHops } from '../icons/hops-strong.svg'
import { ReactComponent as MediumHops } from '../icons/hops-medium.svg'
import { ReactComponent as WeakHops } from '../icons/hops-weak.svg'

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
                        <label htmlFor={`${filter}All`}>
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
                        <label htmlFor={`${filter}Weak`}>
                            <input
                                type="radio"
                                name={`filter-${filter}`}
                                className={inputClass}
                                id={`${filter}Weak`}
                                value="weak"
                                onChange={handleChange}
                            />
                            {filter === 'abv' ? <WeakBeer /> : <WeakHops />}

                        </label>
                        <label htmlFor={`${filter}Medium`}>
                            <input
                                type="radio"
                                name={`filter-${filter}`}
                                className={inputClass}
                                id={`${filter}Medium`}
                                value="medium"
                                onChange={handleChange}
                            />
                            {filter === 'abv' ? <MediumBeer /> : <MediumHops />}
                        </label>
                        <label htmlFor={`${filter}Strong`}>
                            <input
                                type="radio"
                                name={`filter-${filter}`}
                                className={inputClass}
                                id={`${filter}Strong`}
                                value="strong"
                                onChange={handleChange}
                            />
                            {filter === 'abv' ? <StrongBeer /> : <StrongHops />}
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}