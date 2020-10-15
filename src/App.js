import React from 'react'
import Container from '@material-ui/core/Container'

import { ComparatorProvider } from './Comparator/Context'
import Comparator from './Comparator'

function App () {
  return (
    <ComparatorProvider>
      <Container maxWidth='sm'>
        <Comparator />
      </Container>
    </ComparatorProvider>
  )
}

export default App
