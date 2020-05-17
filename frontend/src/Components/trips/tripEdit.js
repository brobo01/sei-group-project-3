import React, { Component } from 'react'
import Select from 'react-select'


import TripFormExt from './TripFormExt'
import { getSingleTrip, editTrip } from '../../lib/api'
import { tags } from '../../lib/tags'

class TripEdit extends React.Component {
  state= {
    formData: {
      name: '',
      startingPoint: '',
      endPoint: '',
      image: '',
      tags: [''],
      description: ''
    },
    }


  async componentDidMount() {
    // const tripId = '5ec15ff85f98656d5846f211'
    const tripId = this.props.match.params.id
    try {
      const res = await getSingleTrip(tripId)
      this.setState({ formData: res.data })
    } catch (err) {
      console.log(err)
      // this.props.history.push('/notfound')
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleMultiChange = selected => {
    console.log('hello')
    const selectedItems = selected ? selected.map(item => item.value) : []
    console.log(selectedItems)
    const formData = { ...this.state.formData, tags: selectedItems }
    this.setState({ formData })
    console.log(this.state.tags)
  }

  handleSubmit = async event => {
    event.preventDefault()
    const tripId = this.props.match.params.id
    console.log(this.state)
    try {
      await editTrip(tripId, this.state.formData)
      // this.props.history.push(`/trips/${tripId}`)
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
            tags={tags}
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