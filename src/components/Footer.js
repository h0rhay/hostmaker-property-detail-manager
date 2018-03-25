import React from 'react'
import styled from 'styled-components'

const AppStyles = styled.div`

  footer {
    height: ${props => props.theme.GutterSpace * 3}em;
    width: calc(100% - ${props => props.theme.GutterSpace * 2}em);
    position:fixed;
    bottom:0;
    padding: ${props => props.theme.GutterSpace}em;
    background: ${props => props.theme.BrandPrimary};
    color: ${props => props.theme.White};
    border-top: 1px solid ${props => props.theme.BrandPrimaryMid};
  }

`

export default () => (
  <AppStyles>
    <footer>
      <h4>Copyright and things</h4>
    </footer>
  </AppStyles>
)
