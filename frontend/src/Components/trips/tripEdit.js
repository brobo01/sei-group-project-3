import React from 'react'

import TripForm from './TripForm'
import { getSingleTrip, editTrip } from '../../lib/api'

class TripEdit extends React.Component {
  state= {
    formData: {
      name: '',
      startingPoint: '',
      endPoint: '',
      image: '',
      tags: [''],
      description: ''
    }
  }

getIframe = () => {
  const iframe = document.querySelector('iframe')
  const inputs = iframe.contentWindow.document.body.querySelectorAll('input')
  console.log(inputs)
}
  
async componentDidMount() {
  console.log('mounting')
    const tripId = this.props.match.params.id
    try {
      const res = await getSingleTrip(tripId)
      console.log(res.data)
      this.setState({ formData: res.data }, this.getIframe)
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
      await editTrip(tripId, this.state.formData)
      this.props.history.push(`/trips/${tripId}`)
    } catch (err) {
      console.log(err.response)
    }
  }

  render() {
    console.log('rendering', this.state.formData)
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