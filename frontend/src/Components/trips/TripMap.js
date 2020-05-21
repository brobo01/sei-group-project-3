import React from 'react'


const TripMap = ({ formData, height, width }) => {

  return (
    <div>
      <iframe
        src={`https://www.mapquest.com/embed/directions/from/${formData.startingPointCountry}/${formData.startingPointState}/${formData.startingPointCity}/to/${formData.endPointCountry}/${formData.endPointState}/${formData.endPointCity}`}
        height={height}
        width={width}
        mapStyle="mapbox://styles/mapbox/dark-v9"
      />
    </div>
  )
}

export default TripMap