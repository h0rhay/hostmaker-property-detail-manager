import React from 'react'

import { Map } from 'google-maps-react'
import Marker from './Marker'
import Circle from './Circle'

export class MapComponent extends React.Component {
  render () {
    const circlePos = {
      lat: '51.5073835',
      lng: ' -0.1277801',
    }
    const circleOptions = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.5,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      radius: 20000,
      position: circlePos,
    }
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
            <Circle options={circleOptions} />
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
