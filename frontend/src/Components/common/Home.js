import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'

import RTimage from '../../styles/assets/roadtrippers.png'

const Home = () => {
  return (
    <div>
              <div className="header">
                <div className="header-left">
                <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} height="50"/></Link>
                </div>
                <div className="header-right"></div>
              </div>      <div className="hero">
        <div className="hero-left">
          <div className="hero-left-title">Welcome to Road Trippin</div>
          <div className="hero-left-subtitle">Home of the Wanderer</div>
          <Link to='/trips' className="hero-left-btn">Get started</Link>
        </div>
        <div className="hero-right"></div>
      </div>
        {/* <div className="recent-trips">
        <div className="title"> */}
          {/* Recent Trips
        </div> */}

        {/* <div className="show-carousel">
            <Carousel
              infiniteLoop
              centerMode
            >
              <div>
                <img src='https://www.kunstler.it/wp-content/uploads/2017/07/MG_3533.jpg'
                  alt="map"
                  className="image carousel-image route-image" />
                <p className="legend"></p>
              <div>
                <img src='https://expertvagabond.com/wp-content/uploads/ring-road-iceland-guide-900x600.jpg'
                  alt="map"
                  className="image carousel-image route-image" />
                <p className="legend"></p>
              </div>
              <div>
                <img src='https://independenttravelcats.com/wp-content/uploads/2017/10/NC500-Roads-8.jpg'
                  alt="trip"
                  className="image carousel-image route-image" />
                <p className="legend"></p>
              </div>
              </div>
            </Carousel>
          </div> */}
                    {/* </div> */}

  
    </div>
  )
}


export default Home