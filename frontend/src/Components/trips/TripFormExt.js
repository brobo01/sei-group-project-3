import React from 'react'
import Select from 'react-select'



const TripFormExt = ({ handleChange, handleMultiChange, handleSubmit, formData, tags, buttonText, titleText }) => {
  return (
    <div className="section">
      <div className="container">
        <img className="logo" src="https://i.ya-webdesign.com/images/alphabet-biker-png-2.png" 
        alt= ""
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

            <div className="form-item">
              <label> Starting Point: </label>
              <input type="text"
                name="startingPoint"
                onChange={handleChange}
                value={formData.startingPoint}
              />
            </div>

            <div className="form-item">
              <label> End Point: </label>
              <input type="text"
                name="endPoint"
                onChange={handleChange}
                value={formData.endPoint}
              />
            </div>

            <div className="form-item">
              <label> Tags: </label>
              {/* <input type="text"
                name="tags"
                onChange={handleChange}
                value={formData.tags}
                /> */}

                <Select 
                  className="select"
                  options={tags}
                  isMulti
                  onChange={handleMultiChange}
                />


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
              <input type="text"
                name="highlights"
                onChange={handleChange}
                value={formData.highlights}
              />
            </div>

            <div className="form-item">
              <label> Time of year: </label>
              <input type="text"
                name="time-of-year"
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
                value={formData.ratings?.scenery}
              />
            </div>

            <div className="form-item">
              <label> Enjoyment: </label>
              <input type="number"
                name="enjoyment"
                onChange={handleChange}
                value={formData.ratings?.enjoyment}
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