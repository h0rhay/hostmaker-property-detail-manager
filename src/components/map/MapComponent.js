import React from 'react'

import { Map } from 'google-maps-react'
import Marker from './Marker'

export class MapComponent extends React.Component {
  render () {
    
    return (
      <div>
        { this.props.loaded
          ?
          <div>Loading...</div>
          :
          <Map google={this.props.google}
            style={{ width: '100%', height: '100%', position: 'relative' }}
            className={'map'}
            zoom={13}
            initialCenter={{
              lat: 51.5073835,
              lng: -0.1277801,
            }}>
            <Marker
              title={'7 Westbourne Terrace, W2 3UL'}
              name={'Carlos'}
              position={{ lat: 51.514070, lng: -0.176236 }} />
            <Marker
              title={'4 Tower Mansions, SE1 3BW'}
              name={'Ankur'}
              position={{ lat: 51.494377, lng: -0.076079 }} />
            <Marker
              title={'4 Goswell Road, SE1 3BW'}
              name={'Elaine'}
              position={{ lat: 51.530729, lng: -0.103382 }} />
          </Map>
        }
      </div>
    )
  }
}

export default MapComponent
