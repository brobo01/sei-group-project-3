import React from 'react'

import TripCard from './TripCard'
import { getAllTrips } from '../../lib/api'

class tripsIndex extends React.Component {
  state = {
    trips: [],
    hover: false,
  }

  async componentDidMount() {
    try {
      const res = await getAllTrips()
      this.setState({ trips: res.data })
    } catch (err) {
      console.log(err)
    }
  } 

 handleHover = async (element) => {
this.setState({ hover: true })
  }

  handleUnhover = async (element) => {
    this.setState({ hover: false })
  }

render() {
  const { trips } = this.state
  console.log(trips)
  return (
    <main>
            <h1> WELCOME THE ROAD TRIPS </h1>
            {trips.map(trip => 
              <TripCard key={trip._id} 
              {...trip}
              hover={this.state.hover}
              handleHover={this.handleHover}
              handleUnhover={this.handleUnhover}/>)}
            
    </main>

    )
  }
}


export default tripsIndex