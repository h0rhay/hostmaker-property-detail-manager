import React from 'react'
import { Router } from 'react-static'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import NavigationHeader from './components/NavigationHeader'
import Footer from './components/Footer'

import theme from './config/theme'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    color: #444;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4 {
    font-weight: normal;
  }
`

const AppStyles = styled.div`

  .content {
    min-height: calc(100vh - ${props => props.theme.GutterSpace}em);
    padding-bottom: ${props => props.theme.GutterSpace * 6}em;

    @media screen and (min-width: ${props => props.theme.SmallScreen}) {
      min-height: unset;
    }
  }

`

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <AppStyles>
        <NavigationHeader />
        <div className="content">
          <Routes />
        </div>
        <Footer />
      </AppStyles>
    </Router>
  </ThemeProvider>
)

export default hot(module)(App)
