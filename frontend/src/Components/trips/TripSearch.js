// import React from 'react'
// import { Link } from 'react-router-dom'

// import RTimage from '../../styles/assets/roadtrippers.png'
// import { getAllTrips } from '../../lib/api'
// import TripCard from './TripCard'
// import Select from 'react-select'

// class TripSearch extends React.Component {
//   state = {
//     trips: [],

//   }

//   options = [
//     { name: 'abroad', label: 'Abroad' },
//     { name: 'vineyard', label: 'Vineyard' },
//     { name: 'architecture', label: 'Architecture' },
//     { name: 'art and culture', label: 'Arts and Culture' },
//     { name: 'camping', label: 'Camping' },
//     { name: 'canyon', label: "Canyons" },
//     { name: 'car', label: 'Cars' },
//     { name: 'cities', label: 'Cities' },
//     { name: 'desert', label: 'Deserts' },
//     { name: 'fast', label: 'Fast' },
//     { name: 'forest', label: 'Forests' },
//     { name: 'friends', label: 'Friends' },
//     { name: 'gastronomy', label: 'Gastronomy' },
//     { name: 'history', label: 'History' },
//     { name: 'hostel', label: 'Hostels' },
//     { name: 'hotel', label: 'Hotels' },
//     { name: 'mechanics', label: 'Mechanics' },
//     { name: 'motorbike', label: 'Motorbikes' },
//     { name: 'mountains', label: 'Mountains' },
//     { name: 'nature', label: 'Nature' },
//     { name: 'off road', label: 'Off-Road', },
//     { name: 'panoramic view', label: 'Panoramic Views' },
//     { name: 'riverside', label: 'Riversides' },
//     { name: 'rural', label: 'Rural' },
//     { name: 'sea', label: 'Sea' },
//     { name: 'solo', label: 'Solo' },
//     { name: 'sports', label: 'Sports' },
//     { name: 'straight', label: 'Straight' }
//   ]

//   async componentDidMount() {
//     try {
//       const res = await getAllTrips()
//       this.setState({ trips: res.data })
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   filterTrips = () => {
//     const { searchVal, selectVal } = this.state
//     console.log('filter', selectVal, searchVal)
//     const regexp = new RegExp(searchVal, 'i')
//     return this.state.trips.filter(trip => (
//       (regexp.test(trip.startingPointCity) || regexp.test(trip.endPointCity)) && (selectVal?.every(tag => { return trip.tags.includes(tag.name) }) ?? true)
//     ))
//   }

//   handleSearch = e => {
//     const searchVal = e.target.value
//     this.setState({ searchVal })

//   }

//   handleMultiChange = selected => {

//     this.setState({ selectVal: selected })
//     console.log(this.state)
//   }

//   render() {

//     return (
//       <section>
//         <div className="header">
//           <div className="header-left">
//             <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} height="50" /></Link>
//           </div>
//           <div className="header-right"></div>
//         </div>
//         <div>
//           <label>Search Locations</label>
//           <input className="input" type="text" onChange={this.handleSearch} />
//         </div>
//         <div>
//           <form >
//             <label>Search Tages</label>
//             <Select
//               options={this.options}
//               isMulti
//               searchable={true}
//               onChange={this.handleMultiChange}
//             />

//           </form>
//         </div>
//         <div>
//           {this.filterTrips().map(trip => (
//             <TripCard key={trip._id} className="all-index-div"
//               {...trip}
//             />
//           ))}
//         </div>


//       </section>
//     )
//   }

// }

// export default TripSearch