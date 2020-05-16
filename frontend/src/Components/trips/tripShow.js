import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'


class tripShow extends React.Component {
state={
  trip: []
}



async componentDidMount() {

  const trip = await axios.get('https://open.mapquestapi.com/staticmap/v5/map?start=London,UK&end=Le+Mans,France&size=600,400@2x&key=2X2ei5QqYNRJ7InGpBh7UIRRYdKv5AsJ')
  const mapURL = trip.config.url
  console.log(mapURL)
  this.setState({ trip })
}

render() {
  const { trip } = this.state
  if(trip.length === 0) return null

  return(
    <div>
      <img className='map' alt='map' src={trip.config.url}/>
    </div>

)
}
}


export default tripShow