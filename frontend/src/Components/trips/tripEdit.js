import React from 'react'

import TripForm from './TripForm'
import { getSingleTrip, editTrip } from '../../lib/api'

class TripEdit extends React.Component {
  state = {
    formData: {
      name: '',
      startingPoint: '',
      endPoint: '',
      image: '',
      tags: [''],
      description: ''
    }
  }

  async componentDidMount() {
    const tripId = this.props.match.params.id
    try {
      const res = await getSingleTrip(tripId)
      this.setState({ formData: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const tripId = this.props.match.params.id
    try {
      await editTrip(cheeseId, this.state.formData)
      this.props.history.push(`/trips/${tripId}`)
    } catch (err) {
      console.log(err.response)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <TripForm
            formData={this.state.formData}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            buttonText="Edit my Trip"
          />
        </div>
      </section>
    )
  }

}

export default TripEdit