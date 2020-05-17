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

//  handleHover = async (element) => {
// this.setState({ hover: true })
//   }

  // handleUnhover = async (element) => {
  //   this.setState({ hover: false })
  // }

render() {
  const { trips } = this.state
  return (
    <main>
      <div className="index">
        <div className="index-container">
          <div className="title"> WELCOME THE ROAD TRIPS </div>
            <div className="all-index-divs">
            {trips.map(trip => 
              <TripCard key={trip._id} className="all-index-div"
              {...trip}
              // hover={this.state.hover}
              // handleHover={this.handleHover}
              // handleUnhover={this.handleUnhover}
              />)}
            </div>
        </div>
      </div>
    </main>

    )
  }
}


export default tripsIndex