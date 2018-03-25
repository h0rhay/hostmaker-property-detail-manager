
import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import PropertyPanel from '../components/PropertyPanel'

const AppStyles = styled.div`

  .gutter-space {
    margin: 0 ${props => props.theme.GutterSpace / 2}em; 
  }

  .full-width {
    width: 100%;
  }

  .columns {
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      flex-grow: 1;
      flex-shrink: 1;
      margin: ${props => props.theme.GutterSpace / 2}em;
      border: 1px solid ${props => props.theme.MidGrey};
      border-radius: ${props => props.theme.BorderRadius};
      overflow:hidden;
      flex-direction: column;
      align-self: unset;

      > div:nth-child(even) {
        .property-detail-label {
          background: ${props => props.theme.BrandPrimaryMid};
        }
      }
    }

  }

  @media screen and (min-width: ${props => props.theme.SmallScreen}) {
    .columns {
      flex-direction: row;
      
      > div {
        align-self: self-start;
      }
    }
  }

  .gutter-space {
    margin: 0 ${props => props.theme.GutterSpace}em; 
  }

`

export default withRouteData(({ properties }) => (
  <AppStyles>
    <div className="gutter-space">
      <h2>
        Property Owner details:
      </h2>
    </div>
    <div className="columns">
      {
        properties.map(property => (<PropertyPanel property={property} />))
      }
    </div>
  </AppStyles>
))
