import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-left-title">Welcome to Road Trippin</div>
          <div className="hero-left-subtitle">Home of the Wanderer</div>
          <Link to='/trips' className="hero-left-btn">Get started</Link>
        </div>
        <div className="hero-right"></div>
      </div>
        <div className="recent-trips">
        <div className="title">
          Recent Trips
        </div>
        <div className="carousel">
          <img src='https://www.kunstler.it/wp-content/uploads/2017/07/MG_3533.jpg' alt="" height='200' className="image"/>
          <img src='https://expertvagabond.com/wp-content/uploads/ring-road-iceland-guide-900x600.jpg' alt="" height='200' className="image"/>
          <img src='https://independenttravelcats.com/wp-content/uploads/2017/10/NC500-Roads-8.jpg' alt="" height='200' className="image"/>
        </div>
        </div>
    </div>
  )
}


export default Home