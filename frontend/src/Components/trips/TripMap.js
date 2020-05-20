import React from 'react'


const TripMap = ({ formData , height , width , search , handleMapSearch}) => {
  return (
    <div>
      {/* <button onClick={handleMapSearch} >Search</button> */}

          <iframe
          src={`https://www.mapquest.com/embed/directions/from/${formData.startingPointCountry}/${formData.startingPointState}/${formData.startingPointCity}/to/${formData.endPointCountry}/${formData.endPointState}/${formData.endPointCity}`} 

          // directions
          // src='https://www.mapquest.com/routeplanner'
          height={height}
          width={width}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          />
    </div>
  )
}

export default TripMap