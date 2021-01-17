import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();

function ContextProvider({ children }) {

    const [beerData, setBeerData] = useState([]);
    const [options, setOptions] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const baseUrl = 'https://api.punkapi.com/v2/beers?page=';

    useEffect(() => {
        const url = baseUrl + pageNumber + options;
        fetch(url)
            .then(promise => promise.json())
            .then(data => setBeerData(data))

    }, [options, pageNumber]);

    const handlePagination = (num) => {
        if (num < 0) setPageNumber(prev => prev - 1)
        else if (num > 0) setPageNumber(prev => prev + 1)
    };

    const abvFilter = (obj) => {
        const { name, value } = obj;
        const filterAbv = 'filter-abv';
        const filterIbu = 'filter-ibu';

        switch (value) {
            case "all":
                setOptions('');
                break;
            case "weak":
                if (name === filterAbv) setOptions('&abv_lt=4.6');
                if (name === filterIbu) setOptions('&ibu_lt=35');
                break;
            case "medium":
                if (name === filterAbv) setOptions('&abv_gt=4.5&abv_lt=7.6');
                if (name === filterIbu) setOptions('&ibu_gt=34&ibu_lt=75');
                break;
            case "strong":
                if (name === filterAbv) setOptions('&abv_gt=7.5');
                if (name === filterIbu) setOptions('&ibu_gt=74');
                break;
            default: setOptions('');

        }
    };

    return (
        <Context.Provider value={{ beerData, abvFilter, pageNumber, handlePagination }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }