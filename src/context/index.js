import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()

function ContextProvider({ children }) {

    const [beerData, setBeerData] = useState([])
    const url = 'https://api.punkapi.com/v2/beers'

    useEffect(() => {
        fetch(url)
            .then(promise => promise.json())
            .then(data => setBeerData(data))

    }, [])

    console.log(beerData)
    return (
        <Context.Provider value={{ beerData }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }