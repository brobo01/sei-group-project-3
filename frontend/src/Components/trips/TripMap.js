import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import Select from 'react-select'
import { countries } from '../../lib/countries'



class TripMap extends React.Component {
  state = {
    formData: {
      startingPointCity: '',
      startingPointCountry: '',
      endPointCity: '',
      endPointCoutry: '',
    },
    search: false
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
    console.log(formData)
  }

  handleMultiChange = selected => {
    const formData = { ...this.state.formData, [selected.target.name]: selected.value }
    console.log(formData)
    this.setState({ formData })

  }

  handleSubmit = () => {
    this.setState({search: !this.state.search})
  }

  _updateViewport = viewport => {
    this.setState({viewport});
  };

render() {
  const {formData} = this.state


  return (
    <div>
            <div className="form-item">
              <label> Starting Point City: </label>
              <input type="text"
                name="startingPointCity"
                onChange={this.handleChange}
                value={formData.startingPointCity}
              />
            </div>
            <div className="form-item">
              <label> Starting Point Country: </label>
              <input type="text"
                name="startingPointCountry"
                onChange={this.handleChange}
                value={formData.startingPointCountry}
              />
            </div>
            {/* <Select 
                  className="select"
                  options={countries}
                  name="startingPointCountry"
                  onChange={this.handleMultiChange}

                  // value={formData.tags}
                /> */}
            <div className="form-item">
              <label> End Point City: </label>
              <input type="text"
                name="endPointCity"
                onChange={this.handleChange}
                value={formData.endPointCity}
              />
            </div>
            <div className="form-item">
              <label> End Point Country: </label>
              <input type="text"
                name="endPointCountry"
                onChange={this.handleChange}
                value={formData.endPointCountry}
              />
            </div>
            {/* <Select 
                  className="select"
                  name="endPointCountry"
                  options={countries}
                  onChange={this.handleMultiChange}
                  // value={formData.tags}
                /> */}

          <button onClick={this.handleSubmit}>Submit</button><br></br>

          <iframe
          src={this.state.search? `https://www.mapquest.com/embed/directions/from/${formData.startingPointCountry}/${formData.startingPointCity}/to/${formData.endPointCountry}/${formData.endPointCity}` : ''} 
          height={'500'}
          width={'500'}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          />

    </div>
    )
}
}

export default TripMap
