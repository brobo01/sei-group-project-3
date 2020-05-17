import React from 'react'
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
    { value: 'mountain', label: 'Mountain' },
    { value: 'andes', label: 'Andes' },
    { value: 'calm', label: 'Calm' }
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
    const regexp = new RegExp(searchVal, 'i')
    return this.state.trips.filter(trip => (
      (regexp.test(trip.startingPoint) || regexp.test(trip.endPoint)) && (trip.tags.includes(selectVal) || selectVal.length === 0)
    ))
  }

  handleSearch = e => {
    const searchVal = e.target.value
    this.setState({ searchVal })
    console.log(searchVal)
  }

  handleMultiChange = selected => {
    const selectVal = selected
    console.log(selectVal)

  }

  render() {

    return (
      <section>
        <div>
          <label>Search Locations</label>
          <input className="input" type="text" onChange={this.handleSearch} />
        </div>
        <div>
          <form>
            <label>Search Tages</label>
            <Select
              options={this.options}
              isMulti
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