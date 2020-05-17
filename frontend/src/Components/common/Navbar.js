import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
  <div className="navbar">
      <Link to='/' className="header-logo"> RoadTrippin </Link>

                  <div className="navbar-links">
          <div className="links">
                    <Link to='/trips' className="link">Trips</Link>
                    <Link to='/trips/trip' className="link">Trip</Link>
                    <Link to='/login' className="link">Login</Link>
                    <Link to='/register' className="link">Register</Link>
                    <Link to='/profile/:id' className="link">Profile</Link>
                  </div>          
          </div>
  </div>

)
}



export default Navbar