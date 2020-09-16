import React, { useState, useEffect } from 'react';

import SearchResult from '../../molecules/SearchResult'
import { SearchHouse } from '../../../domain/useCases/SearchHouse'

const Comparator = () => {
  const [houses, setHouses] = useState('')

  useEffect(() => {
    async function fetchData() {
      const search = SearchHouse()
      await search.getFromWorld('Antica', setHouses)
    }

    fetchData()
  }, [])

  return (
    <>
      {houses && (<SearchResult result={houses} />)}
    </>
  )
}

export default Comparator