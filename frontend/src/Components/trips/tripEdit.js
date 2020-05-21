import React from 'react'

import TripFormExt from './TripFormExt'
import { getSingleTrip, editTrip } from '../../lib/api'

class TripEdit extends React.Component {
  state = {
    formData: {
      name: '',
      image: '',
      tags: [''],
      description: '',
      startingPointCity:'',
      startingPointState:'',
      startingPointCountry:'',
      endPointCity:'',
      endPointState:'',
      endPointCountry:'',
      scenery: '',
      enjoyment: '',
      distance:'',
      timeOfYear:'',
      highlights:''
    },
    errors: {},
    tempTrip: {
      startingPointCity:'',
      startingPointState:'',
      startingPointCountry:'',
      endPointCity:'',
      endPointState:'',
      endPointCountry:'',
    }
  }

  async componentDidMount() {
    const tripId = this.props.match.params.id
    try {
      const res = await getSingleTrip(tripId)
      const tempTrip = { ...this.state.tempTrip, ...res.data}
      this.setState({ formData: res.data , tempTrip})
      console.log(this.state.tempTrip)
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ formData, errors })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const tripId = this.props.match.params.id
    try {
      await editTrip(tripId, this.state.formData)
      this.props.history.push(`/trips/${tripId}`)
    } catch (err) {
      console.log(err.response)
    }
  }

  handleMapChange = e => {
    const tempTrip = { ...this.state.tempTrip, [e.target.name]: e.target.value }
    this.setState({ tempTrip }) 
  }

  handleTripSearch = () => {
    const finalTrip = {...this.state.tempTrip}
    const formData = {...this.state.formData , ...finalTrip}
    // console.log(state)
    this.setState({ formData })
  }




  render() {
    return (
      <section className="section">
        <div className="container">
          <TripFormExt
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleMapChange={this.handleMapChange}
            handleMapSearch={this.handleMapSearch}
            handleTripSearch={this.handleTripSearch}
            formData={this.state.formData}
            tempTrip={this.state.tempTrip}
            errors={this.state.errors}
            titleText="Create a Trip"
            buttonText="Edit my Trip"
          />
        </div>
      </section>
    )
  }

}

export default TripEdit