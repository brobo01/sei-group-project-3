import React from 'react'
import axios from 'axios'
import mapboxgl, { Marker } from 'react-map-gl'


class TripMap extends React.Component {
// state = { bikepoints: [] }

componentDidMount() {
  this.map = new mapboxgl.Map({
    container: this.mapContainer,
    style: 'mapbox://styles/mapbox/streets-v9'
  });
}

componentWillUnmount() {
  this.map.remove();
}

render() {
  const style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%'
  };

  return <div style={style} ref={el => this.mapContainer = el} />;
}
}

// async componentDidMount () {
//   try {
//     const res = await axios.get('https://api.tfl.gov.uk/bikepoint')
//     console.log(res.data)
//     this.setState({ bikepoints: res.data })
//   } catch (err){
//     console.log(err)
//   }
// }


// render() {
//   return (
//     <MapGL
//       mapboxApiAccessToken={'pk.eyJ1IjoiYnJvYm8xIiwiYSI6ImNrYTU2YWZ1aTAwNnozcHFrMjR3Ym1wbGEifQ.6oCNHwKPmFw0nOUHivbM9Q'}
//       height={'50vh'}
//       width={'50vw'}
//       mapStyle='mapbox://styles/mapbox/streets-v11'
//       latitude={51.515}
//       longitude={-0.078}
//       zoom={12}
//       interactive="true"
//     > 
      {/* {bikepoints.map(bikepoint => (
        <Marker
          latitude={bikepoint.lat}
          longitude={bikepoint.lon}
          key={bikepoint.commonName}
        >
          <span role="img" aria-label="marker">🚲</span>
        </Marker>
      ))} */}
//     </MapGL>
//   )
// }
// }

export default TripMap
