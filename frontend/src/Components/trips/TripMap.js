import React from 'react'


const TripMap = ({ formData, height, width, search, handleMapSearch , finalTrip}) => {
  console.log(finalTrip)
  console.log(formData)
  // if(!tripFinal) return null
  return (
    <div>
      {/* <button onClick={handleMapSearch} >Search</button> */}
      <iframe
        title="map"
        src={`https://www.mapquest.com/embed/directions/from/${finalTrip.startingPointCountry}/${finalTrip.startingPointState}/${finalTrip.startingPointCity}/to/${finalTrip.endPointCountry}/${finalTrip.endPointState}/${finalTrip.endPointCity}`}
        height={height}
        width={width}
        mapStyle="mapbox://styles/mapbox/dark-v9"
      />
    </div>
  )
}

export default TripMap