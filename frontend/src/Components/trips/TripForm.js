import React from 'react'


const TripForm = ({ handleChange, handleSubmit, formData, buttonText, titleText, errors }) => {
  return (
    <div className="section">
      <div className="container">
        <img className="logo" src="https://i.ya-webdesign.com/images/alphabet-biker-png-2.png"
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

            <div className="form-item">
              <label> Starting Point: </label>
              <input type="text"
                name="startingPoint"
                onChange={handleChange}
                value={formData.startingPoint}
              />
            </div>
            {errors.startingPoint && <small>{errors.startingPoint}</small>}

            <div className="form-item">
              <label> End Point: </label>
              <input type="text"
                name="endPoint"
                onChange={handleChange}
                value={formData.endPoint}
              />
            </div>
            {errors.endPoint && <small>{errors.endPoint}</small>}

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
    </div>
  )
}

export default TripForm