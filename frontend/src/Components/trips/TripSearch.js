import React from 'react'
import { Link } from 'react-router-dom'

import RTimage from '../../styles/assets/roadtrippers.png'
import { getAllTrips } from '../../lib/api'
import TripCard from './TripCard'
import Select from 'react-select'

class TripSearch extends React.Component {
  state = {
    trips: [],
    searchVal: '',
    selectVal: []
  }

  options = [
    { value: 'route-66', label: 'Route 66' },
    { value: 'vegas', label: 'Vegas' },
    { value: 'hollywood', label: 'Hollywood' },
    { value: 'chicago', label: 'Chicago' },
    { value: 'mountains', label: 'Mountains' },
    { value: 'scenery', label: 'Scenery' },
    { value: 'villages', label: 'Villages' },
    { value: 'beaches', label: 'Beaches' },
    { value: 'convoy', label: 'Convoy' },
    { value: 'hilly', label: 'Hilly' },
    { value: 'good-times', label: 'Good Times' },
    { value: 'atmosphere', label: 'Atmosphere' },
    { value: 'calm', label: 'Calm' },
    { value: 'rocky-landscape', label: 'Rocky Landscape' },
    { value: 'lakes', label: 'Lakes' },
    { value: 'greener', label: 'Greener' },
    { value: 'south-america', label: 'South America' },
    { value: 'andes', label: 'Andes' }
  ]

  async componentDidMount() {
    try {
      const res = await getAllTrips()
      this.setState({ trips: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  filterTrips = () => {
    const { searchVal, selectVal } = this.state
    console.log('filter', selectVal, searchVal)
    const regexp = new RegExp(searchVal, 'i')
    return this.state.trips.filter(trip => (
      (regexp.test(trip.startingPoint) || regexp.test(trip.endPoint)) && (selectVal?.every(tag => { return trip.tags.includes(tag.label) }) ?? true)
    ))
  }

  handleSearch = e => {
    const searchVal = e.target.value
    this.setState({ searchVal })

  }

  handleMultiChange = selected => {

    this.setState({ selectVal: selected })
    console.log(this.state)
  }

  render() {

    return (
      <section>
              <div className="header">
                <div className="header-left">
                <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} height="50"/></Link>
                </div>
                <div className="header-right"></div>
              </div>        <div>
          <label>Search Locations</label>
          <input className="input" type="text" onChange={this.handleSearch} />
        </div>
        <div>
          <form >
            <label>Search Tages</label>
            <Select
              options={this.options}
              isMulti
              searchable={true}
              onChange={this.handleMultiChange}
            />

          </form>
        </div>
        <div>
          {this.filterTrips().map(trip => (
            <TripCard key={trip._id} className="all-index-div"
              {...trip}
            />
          ))}
        </div>


      </section>
    )
  }

}

export default TripSearch