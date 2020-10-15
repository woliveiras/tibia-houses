import React, { createContext, useContext, useState } from 'react'

const ComparatorContext = createContext({})

const ComparatorProvider = ({ children }) => {
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
    <ComparatorContext.Provider value={value}>
      {children}
    </ComparatorContext.Provider>
  )
}

const useComparator = () => {
  const context = useContext(ComparatorContext)
  if (!context) throw new Error('useComparator must be used within a ThemeProvider')

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

export { ComparatorProvider, useComparator }
