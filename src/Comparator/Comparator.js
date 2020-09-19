import React from 'react'

import { useSearch } from '../Search/Context'

import { Search, Filters } from '../Search'

const Comparator = () => {
  const { searchParams } = useSearch()
  const { selectedWorld } = searchParams

  return (
    <>
      <h1>Casas Tibianas para aluguel em {selectedWorld}</h1>
      <Filters />
      <Search />
    </>
  )
}

export default Comparator
