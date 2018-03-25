import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import MapComponent from '../components/map/MapComponent'

const GapiKey = 'AIzaSyAA80aJ88fiRYBkzyRYMNudLQmbsIM7jfI'

export class MapContainer extends React.Component {
  render () {
    const style = {
      width: '100%',
      height: '100%',
    }

    return (
      <MapComponent
        google={this.props.google}
        style={style}
        onClick={this.onMapClicked}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (GapiKey),
})(MapContainer)
