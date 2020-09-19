import React from 'react'

import { SearchProvider } from './Search/Context'

import Comparator from './Comparator'

function App() {
  return (
    <SearchProvider>
      <Comparator />
    </SearchProvider>
  )
}

export default App
