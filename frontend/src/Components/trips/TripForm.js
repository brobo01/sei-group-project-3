import React from 'react'
import TripMap from './TripMap'


const TripForm = ({ handleChange, handleSubmit, formData, buttonText, titleText, errors , search , _updateViewport , handleMapSearch }) => {
  return (
    <div>
    // <div className="section">
    //   <div className="container">
        {/* <img className="logo" src="https://i.ya-webdesign.com/images/alphabet-biker-png-2.png"
          alt=""
          height="100" /> */}
        {/* <div className="title">{titleText}</div>
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

            <div className="form-item">
              <label> Starting Point City: </label>
              <input type="text"
                name="startingPointCity"
                onChange={handleChange}
                value={formData.startingPointCity}
              />
            </div>
            {errors.startingPoint && <small>{errors.startingPoint}</small>}
            <div className="form-item">
              <label> Starting Point Country: </label>
              <input type="text"
                name="startingPointCountry"
                onChange={handleChange}
                value={formData.startingPointCountry}
              />
            </div>
            {errors.startingPoint && <small>{errors.startingPoint}</small>}

            <div className="form-item">
              <label> End Point City: </label>
              <input type="text"
                name="endPointCity"
                onChange={handleChange}
                value={formData.endPointCity}
              />
            </div>
            {errors.endPoint && <small>{errors.endPoint}</small>}
            <div className="form-item">
              <label> End Point Country: </label>
              <input type="text"
                name="endPointCountry"
                onChange={handleChange}
                value={formData.endPointCountry}
              />
            </div>
            {errors.endPoint && <small>{errors.endPoint}</small>} */}

          <TripMap
            formData={formData}
            errors={errors}
            handleMapSearch={handleMapSearch}
            search={search}
            height={'1000'}
            width={'1000'}
          />


{/* 


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
        </form> */}
      </div>
    </div>
    </div>
  )
}

export default TripForm