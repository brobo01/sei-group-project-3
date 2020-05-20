import React from 'react'


const TripMap = ({ formData , height , width , search , handleMapSearch}) => {
  return (
    <div>
      {/* <button onClick={handleMapSearch} >Search</button> */}
      {console.log('this also happened')}
          <iframe
          // src={`https://www.mapquest.com/embed/directions/from/${formData.startingPointCountry}/on/${formData.startingPointCity}/to/${formData.endPointCountry}/bc/${formData.endPointCity}`} 
          // src={`https://www.mapquest.com/embed/directions/from/list/1/us/la/new-orleans/to/us/new-york/trump-tower-305925104`} 

          // directions
          src='https://www.mapquest.com/routeplanner'
          height={height}
          width={width}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          />
    </div>
  )
}

export default TripMap