import React from 'react'
import Select from 'react-select'
import TripForm from './TripForm'



const TripFormExt = ({ handleChange, handleMultiChange, handleSubmit, handleMapChange, handleMapSearch , handleTripSearch , formData, tempTrip, buttonText, titleText, errors }) => {
  return (
    <div className="section">
      <div className="container">
        <TripForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleMapChange={handleMapChange}
          handleMapSearch={handleMapSearch}
          handleTripSearch={handleTripSearch}
          formData={formData}
          tempTrip={tempTrip}
          errors={errors}
          buttonText="Add some more details"
          titleText="Create a Trip"
        />

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

            <div className="form-item">
              <label> Tags: </label>
              <input type="text"
                name="tags"
                onChange={handleChange}
                value={formData.tags}
                />

                {/* <Select 
                  className="select"
                  options={tags}
                  isMulti
                  onChange={handleMultiChange}
                  // value={formData.tags}
                /> */}


            </div>

            <div className="form-item">
              <label> Description: </label>
              <textarea type="text"
                name="description"
                onChange={handleChange}
                value={formData.description}
              />
            </div>

            <div className="form-item">
              <label> Image: </label>
              <input type="text"
                name="image"
                onChange={handleChange}
                value={formData.image}
              />
            </div>

            <div className="form-item">
              <label> Highlights: </label>
              <input
                type="text"
                name="highlights"
                onChange={handleChange}
                value={formData.highlights}
              />
            </div>

            <div className="form-item">
              <label> Time of year: </label>
              <input type="text"
                name="timeOfYear"
                onChange={handleChange}
                value={formData.timeOfYear}
              />
            </div>

            <div className="form-item">
              <label> Distance: </label>
              <input type="text"
                name="distance"
                onChange={handleChange}
                value={formData.distance}
              />
            </div>

            <div className="form-item">
              <label> Scenery: </label>
              <input type="number"
                name="scenery"
                onChange={handleChange}
                value={formData.scenery}
              />
            </div>

            <div className="form-item">
              <label> Enjoyment: </label>
              <input type="number"
                name="enjoyment"
                onChange={handleChange}
                value={formData.enjoyment}
              />
            </div>

            <button type='submit' className="submit-btn">{buttonText}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TripFormExt