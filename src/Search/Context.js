import React, { createContext, useContext, useState } from 'react'

const SearchContext = createContext({})

const SearchProvider = ({ children }) => {
  const [selectedWorld, setSelectedWorld] = useState('Antica')
  const [selectedTown, setSelectedTown] = useState('')
  const [worlds, setWorlds] = useState([])
  const [houses, setHouses] = useState([])
  const value = {
    selectedWorld,
    setSelectedWorld,
    selectedTown,
    setSelectedTown,
    worlds,
    setWorlds,
    houses,
    setHouses
  }

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) throw new Error('useSearch must be used within a ThemeProvider')

  const {
    selectedWorld,
    setSelectedWorld,
    selectedTown,
    setSelectedTown,
    worlds,
    setWorlds,
    houses,
    setHouses
  } = context

  return {
    selectedWorld,
    setSelectedWorld,
    selectedTown,
    setSelectedTown,
    worlds,
    setWorlds,
    houses,
    setHouses
  }
}

export { SearchProvider, useSearch }
