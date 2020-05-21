import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import RTimage from '../../styles/assets/roadtrippers.png'
import TripForm from './TripForm'

class TripNew extends React.Component {
  state = {
    formData: {
      name: '',
      image: '',
      tags: [''],
      description: '',
    },
    errors: {},
    search: true,
    finalTrip: {
      startingPointCity:'London',
      startingPointState:'',
      startingPointCountry:'GB',
      endPointCity:'London',
      endPointState:'',
      endPointCountry:'GB',
    },
    tempTrip: {
      startingPointCity:'',
      startingPointState:'',
      startingPointCountry:'',
      endPointCity:'',
      endPointState:'',
      endPointCountry:'',
    }
  }

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ formData, errors })
    console.log(this.state.formData.name)
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/trips', this.state.formData)
      this.props.history.push(`/trips/${res.data._id}`)
    } catch (err) {
      // this.setState({ errors: err.response.data })
      console.log(this.state.errors)
    }
  }

  handleMapChange = e => {
    const tempTrip = { ...this.state.tempTrip, [e.target.name]: e.target.value }
    this.setState({ tempTrip })
    console.log(this.state.tempTrip)
  }

  handleTripSearch = () => {
    const finalTrip = {...this.state.tempTrip}
    console.log(finalTrip)
    this.setState({ finalTrip })
    console.log(this.state.finalTrip)
  }



  render() {

    return (
      <section>
        <div className="header">
          <div className="header-left">
            <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} height="50" /></Link>
          </div>



          <div className="header-right"></div>
        </div>
        <h1>create a trip and get reccomendation from other travellers</h1>
        <TripForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleMapChange={this.handleMapChange}
          handleMapSearch={this.handleMapSearch}
          handleTripSearch={this.handleTripSearch}
          formData={this.state.formData}
          tempTrip={this.state.tempTrip}
          finalTrip={this.state.finalTrip}
          errors={this.state.errors}
          buttonText="Submit Trip"
          titleText="Create a Trip"
        />
      </section>
    )
  }


}

export default TripNew