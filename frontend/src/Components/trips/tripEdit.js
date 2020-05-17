import React from 'react'
import axios from 'axios'
import TripFormExt from './TripFormExt'
import { editTrip } from '../../lib/api'
// import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


class tripEdit extends React.Component {
  state = {
    formData: {
      name: '',
      startingPoint: '',
      endPoint: '',
      image: '',
      tags: [''],
      description: ''
    },
    tags:[
      { value: 'south-america', label: 'South American' },
      { value: 'andes', label: 'Andes' },
      { value: 'route-66', label: 'Route 66' },
      { value: 'vegas', label: 'Vegas' },
      { value: 'hollywood', label: 'Hollywood' },
      { value: 'chicago', label: 'Chicago' },
      { value: 'convoy', label: 'Convoy' },
      { value: 'hilly', label: 'Hilly' },
      { value: 'good-times', label: 'Good times' },
      { value: 'atmosphere', label: 'Atmosphere' },
      { value: 'chicago', label: 'Chicago' },
      { value: 'mountains', label: 'Mountains' },
      { value: 'scenery', label: 'Scenery' },
      { value: 'villages', label: 'Villages' },
      { value: 'beaches', label: 'Beaches' },
      { value: 'chicago', label: 'Chicago' },
      { value: 'calm', label: 'Calm' },
      { value: 'rocky-landscape', label: 'Rocky Landscape' },
      { value: 'lakes', label: 'Lakes' },
      { value: 'greenery', label: 'Greenery' }
    ]
  }

  async componentDidMount() {
    try{
      const res = await axios.get('/api/trips/5ec1286516918a6506803862')
      this.setState({ formData: res.data })
      // console.log(this.state.formData.ratings.scenery)
    } catch (err){
      console.log(err.response)
      // this.props.history.push('/notfound')
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  
  handleMultiChange = selected =>{
    const selectedItems = selected ? selected.map(item => item.value) : []
    const formData = { ...this.state.formData, breakfastOrder: selectedItems }
    this.setState({ formData })
  }


  handleSubmit = async event => {
    event.preventDefault()
    // const tripId = this.props.match.params.id
    const tripId = '5ec1286516918a6506803862'
    try {
      await editTrip(tripId, this.state.formData)
      this.props.history.push(`/trips/${tripId}`)
    } catch (err) {
      console.log(err.response)
    }
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <TripFormExt
            formData={this.state.formData}
            tags={this.state.tags}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            buttonText="Edit my Trip"
          />
        </div>
      </section>
    )
  }
}




export default tripEdit