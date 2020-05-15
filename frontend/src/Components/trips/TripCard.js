import React from 'react'
import { Link } from 'react-router-dom'

//* tags is an array

const TripCard = ({ _id, name, image, routeImage, tags, handleHover, handleUnhover, hover }) => (

<div>

  <Link to={`/trips/${_id}`}>
    <h3>{name}</h3>
      <img src= {hover ? routeImage : image} alt={name} onMouseEnter={handleHover} onMouseLeave={handleUnhover}/>
      </Link> 

      <br></br>
      
      {tags.map(tag => (
        <span key={tag}>{tag} - </span>
      ))}
  
</div>
 
)

export default TripCard