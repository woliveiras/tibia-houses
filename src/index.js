import React from 'react'
import ReactDOM from 'react-dom'
import TagMamager from 'react-gtm-module'
import App from './App'

import 'fontsource-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import gtmConfig from './gtmConfig'

TagMamager.initialize(gtmConfig)

ReactDOM.render(

  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>,
  </ThemeProvider>,

  document.getElementById('root')
)
