import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()

function ContextProvider({ children }) {

    const [beerData, setBeerData] = useState([])
    const [options, setOptions] = useState('')
    const urlBase = 'https://api.punkapi.com/v2/beers'

    useEffect(() => {
        const url = urlBase + '?' + options
        fetch(url)
            .then(promise => promise.json())
            .then(data => setBeerData(data))

    }, [options])

    const abvFilter = (obj) => {
        const { name, value } = obj
        switch (value) {
            case "all":
                setOptions('')
                break
            case "weak":
                if (name === 'filter-abv') setOptions('abv_lt=4.6')
                if (name === 'filter-ibu') setOptions('ibu_lt=35')
                break
            case "medium":
                if (name === 'filter-abv') setOptions('abv_gt=4.5&abv_lt=7.6')
                if (name === 'filter-ibu') setOptions('ibu_gt=34&ibu_lt=75')
                break
            case "strong":
                if (name === 'filter-abv') setOptions('abv_gt=7.5')
                if (name === 'filter-ibu') setOptions('ibu_gt=74')
                break
            default: setOptions('')

        }
    }

    return (
        <Context.Provider value={{ beerData, abvFilter }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }