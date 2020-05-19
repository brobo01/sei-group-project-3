import React from 'react'
import ImageUpload from './ImageUpload'

class  ProfileForm extends React.Component {
  state = {
    userData: {
      name: null,
      username: "broboBeardMan",
      email: "ben@email",
      homeBase: null,
      garage: null,
      dreamTrips: null, 
      recentTrips: [''],
      profilePhoto: [''],
      bio: null,
      tripPrefs: [''],
    },
    image: ['']
  }


//********************* */ NOT IN USE

  handleAddImage = () => {
    const userData = { ...this.props.userData, profilePhoto: [...this.state.profilePhoto, ''] }
    this.setState({ userData })
  }

  handleImageChange = (event, i) => {
    const images = [...this.state.image]
    const newImages = images.map((image, index) => {
      if (i === index) return event.target.value
      return image
    })
    const userData = { ...this.state.userData, profilePhoto: newImages }
    this.setState({ userData })
  }


  render() {
    const { userData } = this.props
    console.log(userData)
    return (
<>
<h1> profile form</h1>
<form onSubmit={this.props.handleSubmit}>
  <h3>Name</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="name"
  name="name"
  onChange={this.props.handleChange}
  value={this.props.userData.name ? this.props.userData.name : ""}
  />
  </div>

<h3>username</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="username"
  name="username"
  onChange={this.props.handleChange}
  value={this.props.userData.username ? this.props.userData.username : ""}
  />
  </div>

<h3>Email</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="email"
  name="email"
  onChange={this.props.handleChange}
  value={this.props.userData.email ? this.props.userData.email : ""}
  />
  </div>

<h3>Home Base</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="home base"
  name="homeBase"
  onChange={this.props.handleChange}
  defaultValue={this.props.userDatahomeBase ? this.props.userData.homeBase : ""}
  />
  </div>

<h3>Garage</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="whats your ride?"
  name="garage"
  onChange={this.props.handleChange}
  defaultValue={this.props.userData.garage ? this.props.userData.garage : ""}
  />
  </div>

<h3>Dream Trips</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="dream trip"
  name="dreamTrips"
  onChange={this.props.handleChange}
  defaultValue={this.props.userData.dreamTrips ? this.props.userData.dreamTrips : ""}
  />
  </div>

<h3>Bio</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="bio"
  name="bio"
  onChange={this.props.handleChange}
  defaultValue={this.props.userData.bio ? this.props.userData.bio : ""}
  />
  </div>

<div className="input-box">
  {this.state.image.map((image, index) => {
    return (
<ImageUpload 
  key={index}
  onChange={args => this.handleImageChange(args, index)}
  name="image"
  />
    )
  })}
  
  <button onClick={this.handleAddImage}>Add Another Image</button>
</div>
  {/* <div className="input-box">
  <input 
  className="input"
  // placeholder="recent trips"
  name="recentTrips"
  
  defaultValue={userData ? userData.recentTrips : ""}
  />
  </div> */}

  {/* <div className="input-box">
  <input 
  className="input"
  // placeholder="profile photo"
  name="profilePhoto"
  defaultValue={userData ? userData.profilePhoto : ""}
  />
  </div> */}

  {/* <div className="input-box">
  <input 
  className="input"
  // placeholder="your preferences"
  name="tripPrefs"
  defaultValue={userData ? userData.tripPrefs : ""}
  />
  </div> */}
  <button type="submit">{this.props.buttonText}</button>
</form>
</>
    )
  }
}

// } ({ userData, handleChange, handleSubmit, buttonText, handleAddImage, handleImageChange, index }) => (



// userData: {
//   name: null,
//   username: "broboBeardMan",
//   email: "ben@email",
//   homeBase: null,
//   garage: null,
//   dreamTrips: null, 
//   recentTrips: [],
//   profilePhoto: [],
//   bio: null,
//   tripPrefs: [],
// },
// userDataTrips: []
// }