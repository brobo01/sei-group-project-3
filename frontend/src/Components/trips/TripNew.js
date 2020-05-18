import React from 'react'
import axios from 'axios'

import TripForm from './TripForm'

class TripNew extends React.Component {
  state = {
    formData: {
      name: '',
      startingPoint: '',
      endPoint: '',
      image: '',
      tags: [''],
      description: ''
    },
    errors: {}
  }

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ formData, errors })

  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/trips', this.state.formData)
      this.props.history.push(`/trips/${res.data._id}`)
    } catch (err) {
      this.setState({ errors: err.response.data })
      console.log(this.state.errors)
    }
  }

  render() {
    return (
      <section className="new-trip">
        <h1>create a trip and get reccomendation from other travellers</h1>
        <TripForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          formData={this.state.formData}
          errors={this.state.errors}
          buttonText="Submit Trip"
          titleText="Create a Trip"
        />
      </section>
    )
  }


}

export default TripNew