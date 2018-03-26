import React from 'react'
import { withSiteData } from 'react-static'
import styled from 'styled-components'

const AppStyles = styled.div`

  .gutter-space {
    margin: 0 ${props => props.theme.GutterSpace / 2}em; 
  }
  
  .columns {
    display: block;
  }

  .column {
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    margin: ${props => props.theme.GutterSpace / 2}em;
    border-radius:3px;
    flex-direction: column;
    background: ${props => props.theme.BrandPrimary};
  }

  .column-content {
    padding: ${props => props.theme.GutterSpace}em;
    text-align: center;
  }

  @media screen and (min-width: ${props => props.theme.SmallScreen}) {
    .columns {
      display:flex;
      flex-direction: row;
    }
  }
  
`

export default withSiteData(() => (
  <AppStyles>
    <div className="gutter-space">
      <h2>Responsive column playground</h2>
    </div>
    <div className="columns">
      <div className="column">
        <div className="column-content">Content</div>
      </div>
      <div className="column">
        <div className="column-content">Content<br />Content<br /> Content</div>
      </div>
      <div className="column">
        <div className="column-content">Content<br />Content</div>
      </div>
      <div className="column">
        <div className="column-content">Content</div>
      </div>
    </div>
  </AppStyles>
))
