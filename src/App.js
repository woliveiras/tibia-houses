import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import { SearchProvider } from './Search/Context'

import Comparator from './Comparator'

function App () {
  return (
    <Container maxWidth='sm'>
      <SearchProvider>
        <Box my={4}>
          <Comparator />
        </Box>
      </SearchProvider>
    </Container>
  )
}

export default App
