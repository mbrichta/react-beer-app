import React, { useContext, useState } from 'react';
import { ReactComponent as MediumBeer } from '../icons/beer-medium.svg';
import { ReactComponent as WeakBeer } from '../icons/beer-weak.svg';
import { ReactComponent as StrongBeer } from '../icons/beer-strong.svg';
import { ReactComponent as StrongHops } from '../icons/hops-strong.svg';
import { ReactComponent as MediumHops } from '../icons/hops-medium.svg';
import { ReactComponent as WeakHops } from '../icons/hops-weak.svg';
import { Context } from '../context';

export default function FilterCard({ filter, inputClass, children }) {

    const { abvFilter } = useContext(Context);
    const [filterData, setFilterData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target

        setFilterData({ name, value })
    };

    return (
        <div className="card filter-card">
            <div className="filter-container">
                <div className="filter-text">
                    <p>{children}</p>
                </div>
                <div className="filter">
                    <form onChange={abvFilter(filterData)} id={`filter${filter.toUpperCase()}`} className="filter-form">
                        <label htmlFor={`${filter}All`}>
                            <input
                                type="radio"
                                name={`filter-${filter}`}
                                className="filter-all"
                                id={`${filter}All`}
                                value="all"
                                onClick={handleChange}
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
                                onClick={handleChange}
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
                                onClick={handleChange}
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
                                onClick={handleChange}
                            />
                            {filter === 'abv' ? <StrongBeer /> : <StrongHops />}
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};