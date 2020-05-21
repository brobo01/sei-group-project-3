import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import RTimage from '../../styles/assets/roadtrippers.png'
import TripForm from './TripForm'
import { withHeaders } from '../../lib/auth'
import { icons } from "../../styles/assets/icon-data"


class TripNew extends React.Component {
  state = {
    formData: {
      name: '',
      image: '',
      tags: [],
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

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ formData, errors })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/trips', this.state.formData, withHeaders())
      console.log(res)

      this.props.history.push(`/trips/${res.data._id}`)
    } catch (err) {
      // this.setState({ errors: err.response.data })
      console.log(this.state.errors)
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

  addToTags = (event) => {
    const icon = event.target.id
    const tripPrefsEdit = this.state.formData.tags
    const index = tripPrefsEdit.indexOf(icon)
    if (tripPrefsEdit.includes(icon)) {
      tripPrefsEdit.splice(index, 1)
      const color = ""
      const formData = { ...this.state.formData, tags: tripPrefsEdit }
      this.changeCSS(icon, color)
      this.setState({ formData })
      console.log(this.state.formData.tags)
    } else {
      tripPrefsEdit.push(icon)
      const color = "white"
      const formData = { ...this.state.formData, tags: tripPrefsEdit }
      this.changeCSS(icon, color)
      this.setState({ formData })
      console.log(this.state.formData.tags)
    }
  }

  changeCSS = (icon, color) => {
    document.getElementById(icon).setAttribute("style", `color: ${color}`)
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
        <TripForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleMapChange={this.handleMapChange}
          handleMapSearch={this.handleMapSearch}
          handleTripSearch={this.handleTripSearch}
          addToTags={this.addToTags}
          icons={icons}
          formData={this.state.formData}
          tempTrip={this.state.tempTrip}
          errors={this.state.errors}
          buttonText="Add some more details"
          titleText="Create a Trip"
        />
      </section>
    )
  }


}

export default TripNew