import React from 'react';

import Search from '../Search'
import Filters from '../Search/Filters'

const Comparator = () => {
  return (
    <>
      <h1>Casas Tibianas para aluguel</h1>
      <Filters />
      <Search world={'Antica'}/>
    </>
  )
}

export default Comparator