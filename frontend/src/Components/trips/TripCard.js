import React from 'react'
import { Link } from 'react-router-dom'


class TripCard extends React.Component {
  state = {
    hover: false
  }

  handleHover = async () => {
    this.setState({ hover: true })
      }
      handleUnhover = async () => {
        this.setState({ hover: false })
      }

    render() {
      const { _id, name, image, routeImage, tags, distance, startingPoint, endPoint } = this.props
      const { hover } = this.state

return (
  <div className ="index-comps">
    <Link to={`/trips/${_id}`}>
      <h3>{name}</h3>

      <img className="index-image" src= {hover ? routeImage : image} 
      alt={name}
      style={{ size: "auto" }}
        onMouseEnter={this.handleHover} 
        onMouseLeave={this.handleUnhover}/>

        <p style= {{ visibility: hover ? "visible" : "hidden" }}
        className="blurb"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleUnhover}>
          {startingPoint} - {endPoint} {distance}
          </p>
        </Link> 
        <br></br>
        {/* {tags.map(tag => (
          <span key={tag}>{tag} - </span>
        ))} */}
  </div>
)}}  
export default TripCard
