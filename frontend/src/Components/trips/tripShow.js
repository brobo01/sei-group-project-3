import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { stringUpdate } from '../../lib/map'

class tripShow extends React.Component {
  state = {
    trip: {},
    pendingRec: '',

  }

  async componentDidMount() {
    const tripId = this.props.match.params.id
    const res = await axios.get(`/api/trips/${tripId}`)
    this.setState({ trip: res.data })
    const startPoint = stringUpdate(this.state.trip.startingPoint)
    const endPoint = stringUpdate(this.state.trip.endPoint)
    const mapUrl = `https://open.mapquestapi.com/staticmap/v5/map?start=${startPoint}&end=${endPoint}&size=600,400@2x&key=2X2ei5QqYNRJ7InGpBh7UIRRYdKv5AsJ`

    const updated = { ...res.data, routeImage: mapUrl }
    this.setState({ trip: updated })

  }

  handleChange = e => {
    const text = e.target.value
    console.log(text)
    this.setState({ pendingRec: text })
  }

  handleSubmit = async e => {
    const tripId = this.props.match.params.id
    try {

      e.preventDefault()
      e.target.reset()
      const res = await axios.post(`/api/trips/${tripId}/comments`, { text: this.state.pendingRec })
      this.setState((state, props) => {
        state.trip.recommendations = res.data.recommendations
        return state
      })

    } catch (err) {
      console.log(err)
    }
  }


  render() {
    const { trip } = this.state


    return (
      <section className="show=page">

        <div className="show-carousel">
          <Carousel
            infiniteLoop
            centerMode
          >
            <div>
              <img src={trip.image}
                alt="map"
                className="image carousel-image route-image" />
              <p className="legend"></p>
            </div>
            <div>
              <img src={trip.routeImage}
                alt="trip"
                className="image carousel-image route-image" />
            </div>
          </Carousel>
        </div>

        {/* max-height set for section, else won't show: */}

        <div className="trip-info">
          <h1>{trip.user?.username}</h1>
          <p>{trip.description}</p>
          <p>Time of year: {trip.timeOfYear}</p>
          <h3>Trip Recommendations from other Travellers:</h3>
          <div className="comments">

            {trip.recommendations?.map(obj => (
              <p key={obj._id}>{obj.text}</p>
            ))}
          </div>
          <form onSubmit={this.handleSubmit}>
            <textarea
              placeholder="leave a recommendation"
              onChange={this.handleChange}
              value={this.pendingRec}
            />
            <button>Submit</button>
          </form>
        </div>
      </section>

    )

  }

}


export default tripShow