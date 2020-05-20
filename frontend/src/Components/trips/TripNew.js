import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import RTimage from '../../styles/assets/roadtrippers.png'
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
    errors: {},
    search: true
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

  _updateViewport = viewport => {
    this.setState({viewport});
  };

  handleMapSearch = () => {
    this.setState({search: !this.state.search})
    console.log(this.state.search)
  }



  render() {
    return (
      <section>
      <div className="header">
      <div className="header-left">
      <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} height="50"/></Link>
      </div>



      <div className="header-right"></div>
    </div>      
          <h1>create a trip and get reccomendation from other travellers</h1>
          <TripForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleMapSearch={this.handleMapSearch}
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