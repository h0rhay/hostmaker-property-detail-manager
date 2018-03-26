import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

import logoImgSVG from '../assets/hostmaker-round.svg'

const AppStyles = styled.div`
  
  header {
    width: calc(100% - ${props => props.theme.GutterSpace * 2}em);
    background: ${props => props.theme.LightGrey};
    padding: 1em ${props => props.theme.GutterSpace}em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid ${props => props.theme.MidGrey};
  }

  header > div, nav {
    width:100%;
    display:block;
    text-align: center;
  }
    
  nav {
    a {
      color: ${props => props.theme.BrandPrimary};
      padding: ${props => props.theme.GutterSpace / 2}em ${props => props.theme.GutterSpace}em;
      display: block;
      text-transform:uppercase;
      text-decoration:none;
      & :hover {
        background: ${props => props.theme.MidGrey};
      }
      @media screen and (min-width: ${props => props.theme.SmallScreen}) {
        display: inline-block;
      }
    }
  }

  @media screen and (min-width: ${props => props.theme.SmallScreen}) {
    header {
      flex-direction: row;
    }

    header > div {
      text-align:left;
    }

    nav {
      text-align: right;
    }
  }
  
`

export default () => (
  <AppStyles>
    <header>
      <div className="logo">
        <img src={logoImgSVG} alt="Hostmaker Logo" />
      </div>
      <nav>
        <Link to="/">Property Details</Link>
        <Link to="/map">Map View</Link>
        <Link to="/cols">Cols</Link>
      </nav>
    </header>
  </AppStyles>
)
