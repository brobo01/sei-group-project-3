import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import RTimage from '../../styles/assets/roadtrippers.png'
import { isAuthenticated, logout } from '../../lib/auth'
import { stack as Menu } from 'react-burger-menu'

class Navbar extends React.Component {


  handleLogout = () => {
    logout()
    this.props.history.push('/')
  }


  render() {
    return (
      // <div className="navbar">
      //   <img className="nav-logo" alt="logo" src={RTimage} />

      <Menu right >

        <div className="navbar-links">
          <div className="links">
            <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} /></Link>
            {isAuthenticated() && <Link to='/trips/new' className="link">Add Trip</Link>}
            <Link to='/trips' className="link">Trips</Link>
            {!isAuthenticated() && <Link to='/login' className="link">Login</Link>}
            {!isAuthenticated() && <Link to='/register' className="link">Register</Link>}
            {isAuthenticated() && <Link to='/profile' className="link">Profile</Link>}
            <Link to='/trips/map' className="link">Map</Link>
            <Link to='/search' className="link">Search</Link>
            {isAuthenticated() && <span onClick={this.handleLogout} className="link">Logout</span>}
          </div>
        </div>
      </Menu>



      // </div>

    )
  }

}



export default withRouter(Navbar)