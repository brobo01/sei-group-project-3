import React from 'react'
import TripMap from './TripMap'


const TripForm = ({ handleChange, handleSubmit, formData, buttonText, titleText, errors , search , _updateViewport , handleMapChange , handleMapSearch , tempTrip , handleTripSearch , finalTrip }) => {
  console.log(finalTrip)
  return (
    <div>
<<<<<<< HEAD
      <div className="section">
      <div className="container">
        {/* <img className="logo" src="https://i.ya-webdesign.com/images/alphabet-biker-png-2.png"
=======
      {/* <div className="section">
        <div className="container"> */}
        <img className="logo" src="https://i.ya-webdesign.com/images/alphabet-biker-png-2.png"
>>>>>>> development
          alt=""
          height="100" />
        <div className="title">{titleText}</div>
        <form onSubmit={handleSubmit}>
          <div className="form">

            <div className="form-item">
              <label> Name: </label>
              <input type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            {errors.name && <small>{errors.name}</small>}

{/* //* HANDLE MAP INPUTS -------------------------------------------------------------------
//? STARTING POINT INPUTS ----------------------------- */}

            <div className="form-item">
              <label> Starting Point City: </label>
              <input type="text"
                name="startingPointCity"
                onChange={handleMapChange}
                value={tempTrip.startingPointCity}
              />
            </div>
            {errors.startingPointCity && <small>{errors.startingPointCity}</small>}

            <div className="form-item">
              <label> Starting Point State: </label>
              <input type="text"
                name="startingPointState"
                onChange={handleMapChange}
                value={tempTrip.startingPointState}
              />
            </div>
            {errors.startingPointState && <small>{errors.startingPoinState}</small>}
            
            <div className="form-item">
              <label> Starting Point Country: </label>
              <input type="text"
                name="startingPointCountry"
                onChange={handleMapChange}
                value={tempTrip.startingPointCountry}
              />
            </div>
            {errors.startingPointCountry && <small>{errors.startingPointCountry}</small>}



{/* //? ENDING POINT INPUTS ----------------------------- */}

            <div className="form-item">
              <label> End Point City: </label>
              <input type="text"
                name="endPointCity"
                onChange={handleMapChange}
                value={tempTrip.endPointCity}
              />
                          </div>

            {errors.endPointCity && <small>{errors.endPointCity}</small>}

            <div className="form-item">
              <label> End Point State: </label>
              <input type="text"
                name="endPointState"
                onChange={handleMapChange}
                value={tempTrip.endPointState}
              />
            </div>
            {errors.endPointState && <small>{errors.endPointState}</small>}

            <div className="form-item">
              <label> End Point Country: </label>
              <input type="text"
                name="endPointCountry"
                onChange={handleMapChange}
                value={tempTrip.endPointCountry}
              />
            </div>
            {errors.endPointCountry && <small>{errors.endPointCountry}</small>}

          <TripMap
            finalTrip={finalTrip}
            formData={formData}
            errors={errors}
            handleMapChange={handleMapChange}
            handleMapSearch={handleMapSearch}
            search={search}
            height={'500'}
            width={'500'}
          />

          <button onClick={handleTripSearch}>Search for your trip</button>

{/* //* END OF MAP INPUTS ------------------------------------------------------------------- */}



            <div className="form-item">
              <label> Tags: </label>
              <input type="text"
                name="tags"
                onChange={handleChange}
                value={formData.tags}
              />
            </div>
            {errors.tags && <small>{errors.tags}</small>}

            <div className="form-item">
              <label> Description: </label>
              <textarea type="text"
                name="description"
                onChange={handleChange}
                value={formData.description}
              />
            </div>
            {errors.description && <small>{errors.description}</small>}

            <div className="form-item">
              <label> Image: </label>
              <input type="text"
                name="image"
                onChange={handleChange}
                value={formData.image}
              />
            </div>
            {errors.image && <small>{errors.image}</small>}

            <button type='submit' className="submit-btn">{buttonText}</button>
          </div>
        </form>
      </div>
    // </div>
    // </div>
  )
}

export default TripForm