


import React from 'react'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import PolylineOverlay from '../../lib/mapOverlay'

class TripMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 51.515,
        longitude: -0.078,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null,
      points: [[51.515,-0.078],[51.315,-0.078]]
    };
  }

  _updateViewport = viewport => {
    this.setState({viewport});
  };

render() {
  const {viewport} = this.state;

  return (
    <div>

    {/* <MapGL
      {...viewport}
      mapboxApiAccessToken='pk.eyJ1IjoiYnJvYm8xIiwiYSI6ImNrYTU2YWZ1aTAwNnozcHFrMjR3Ym1wbGEifQ.6oCNHwKPmFw0nOUHivbM9Q'
      height={'50vh'}
      width={'50vw'}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={this._updateViewport}
      zoom={12}
      > 
    <PolylineOverlay points={this.state.points} />      
        {/* <Marker
        latitude="51.515"
        longitude="-0.078"
        >
        <span role="img" aria-label="marker">🚲</span>
        </Marker> */}

    {/* </MapGL> */} */}
<iframe
src="https://www.mapquest.com/embed/directions/from/gb/london/to/gb/birmingham"
height={'500'}
width={'500'}
mapStyle="mapbox://styles/mapbox/dark-v9"

/>

      </div>
  )
}
}

export default TripMap
