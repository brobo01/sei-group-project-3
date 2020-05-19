import React from 'react'
import { Link } from 'react-router-dom'

import RTimage from '../../styles/assets/roadtrippers.png'
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
              <div className="header">
                <div className="header-left">
                <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} height="50"/></Link>
                </div>
                <div className="header-right"></div>
              </div>
      <div className="index">
        <div className="index-container">
          <div className="title"> WELCOME TO THE ROAD TRIPS </div>
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