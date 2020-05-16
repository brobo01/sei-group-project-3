import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


class tripShow extends React.Component {
  state = {
    trip: [],

  }

  async componentDidMount() {
    const res = await axios.get('/api/trips/5ebfd648a9fc680f2c15758a')
    this.setState({ trip: res.data })
    this.getMap()
  }


  getMap = async () => {
    const map = await axios.get('https://open.mapquestapi.com/staticmap/v5/map?start=London,UK&end=Le+Mans,France&size=600,400@2x&key=2X2ei5QqYNRJ7InGpBh7UIRRYdKv5AsJ')

    this.setState({ ...this.state.trip, routeImage: map.config.url })
  }

  render() {
    const { trip } = this.state

    if (trip.length === 0) return null

    return (
      <section>
        <img className='map' alt='map' src={trip.routeImage} />
        <Carousel>
          <div>
hello
          </div>
        </Carousel>
      </section>

    )

  }

}


export default tripShow