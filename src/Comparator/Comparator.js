import React from 'react'
import Typography from '@material-ui/core/Typography'

import { Filters } from './FiltersContainer/Filters'
import { Search } from './Search/Search'

import { useComparator } from './Context'

const Comparator = () => {
  const { selectedWorld } = useComparator()
  return (
    <header>
      <Typography variant='h1'>Casas tibianas para aluguel em {selectedWorld}</Typography>
      <Filters />
      <Search />
    </header>
  )
}

export default Comparator
