
import React from 'react'
import styled from 'styled-components'

const AppStyles = styled.div`

  .property-detail-field, .property-detail-label {
    padding: ${props => props.theme.GutterSpace}em;
  }

  .property-detail-label {
    width: calc(35% - ${props => props.theme.GutterSpace * 2}em);
    background: ${props => props.theme.BrandPrimary};
    color: ${props => props.theme.White};
    border-right: 1px solid ${props => props.theme.BrandPrimaryMid}
  }

  .property-detail-field {
    width: calc(65% - ${props => props.theme.GutterSpace * 2}em);
    border-bottom: 1px solid ${props => props.theme.LightGrey};
    text-transform: capitalize;
    p {
      margin: ${props => props.theme.GutterSpace / 2}em 0;
    }
  }

  .column {
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    margin: ${props => props.theme.GutterSpace / 2}em;
  }

  .column-content {
    background: ${props => props.theme.BrandPrimary};
    padding: ${props => props.theme.GutterSpace}em;
    text-align: center;
  }


  .table-row {
    display:flex;
    flex-direction: row;
  }

  .border-none {
    border:none;
  }

`


export default (({ property }) => (
  <AppStyles key={property.airbnbId}>
    <div className="table-row">
      <div className="property-detail-label">
        Owner
      </div>
      <div className="property-detail-field">
        {property.owner && property.owner}
      </div>
    </div>
    <div className="table-row">
      <div className="property-detail-label">
        Address
      </div>
      <div className="property-detail-field">
        {property.address.line1 &&
          (<p>{property.address.line1}</p>)
        }
        {property.address.line2 &&
          (<p>{property.address.line2}</p>)
        }
        {property.address.line3 &&
          (<p>{property.address.line3}</p>)
        }
        {property.address.line4 &&
          (<p>{property.address.line4}</p>)
        }
        {property.address.line5 &&
          (<p>{property.address.line5}</p>)
        }
        {property.address.postCode &&
          (<p>{property.address.postCode}</p>)
        }
        {property.address.city &&
          (<p>{property.address.city}</p>)
        }
        {property.address.country &&
          (<p>{property.address.country}</p>)
        }
      </div>
    </div>
    <div className="table-row">
      <div className="property-detail-label">
        Income
      </div>
      <div className={['property-detail-field', 'border-none'].join(' ')}>
        £ {property.incomeGenerated && property.incomeGenerated}
      </div>
    </div>
  </AppStyles>
))
