import React from 'react'
import { Link } from 'react-router-dom'

//* tags is an array

const TripCard = ({ _id, name, image, routeImage, tags, handleHover, handleUnhover, hover }) => (


<div>
  <Link to={`/trips/${_id}`}>
    <h3>{name}</h3>
    <div>
    <img className="float" src= {hover ? routeImage : image} 
      alt={name} 
      onMouseEnter={handleHover} 
      onMouseLeave={handleUnhover}/>
      <p style= {{ display: hover ? "" : "none" }}
      className="blurb"
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}>LOTS OF INFO AND MUCH MUCH MOREEEE</p>
    </div>
      </Link> 

      <br></br>
      
      {tags.map(tag => (
        <span key={tag}>{tag} - </span>
      ))}
  
</div>
 
)

export default TripCard