import React from 'react';

import Search from '../Search'
import Filters from '../Search/Filters'

import { SearchProvider } from '../Search/Context'

const Comparator = () => {
  return (
    <SearchProvider>
      <h1>Casas Tibianas para aluguel</h1>
      <Filters />
      <Search world={'Antica'}/>
    </SearchProvider>
  )
}

export default Comparator