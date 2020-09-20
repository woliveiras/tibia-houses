import React from 'react'

import Typography from '@material-ui/core/Typography'

import { useSearch } from '../Search/Context'
import { Search, Filters } from '../Search'

const Comparator = () => {
  const { selectedWorld } = useSearch()

  return (
    <>
      <Typography variant='h1'>Casas Tibianas para aluguel em {selectedWorld}</Typography>
      <Filters />
      <Search />
    </>
  )
}

export default Comparator
