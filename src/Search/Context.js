import React, { createContext, useState } from 'react'

const SearchContext = createContext(null)
const SearchDispatchContext = createContext(null)

const SearchProvider = ({children}) => {
    const [searchDetails, setSearchDetails] = useState({
        world: 'Antica'
    })

    return (
        <SearchContext.Provider value={searchDetails}>
            <SearchDispatchContext.Provider value={setSearchDetails}>
                {children}
            </SearchDispatchContext.Provider>
        </SearchContext.Provider>
    )
}

export { SearchProvider, SearchContext, SearchDispatchContext }