import React, { createContext, useContext, useState } from 'react'

const SearchContext = createContext({})

const SearchProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({
    selectedWorld: 'Antica',
    town: '',
    worlds: [],
    houses: []
  })

  return (
    <SearchContext.Provider value={{ searchParams, setSearchParams }}>
      {children}
    </SearchContext.Provider>
  )
}

const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) throw new Error('useSearch must be used within a ThemeProvider')
  const { searchParams, setSearchParams } = context
  return { searchParams, setSearchParams }
}

export { SearchProvider, SearchContext, useSearch }
