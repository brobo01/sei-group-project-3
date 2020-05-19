import React from 'react'
import axios from 'axios'

import ImageUpload from './ImageUpload'
import ReactTooltip from "react-tooltip"
import SVG from 'react-inlinesvg'
import  { icons } from  '../../styles/all-icons'

import { editProfile } from '../../lib/api'

class ProfileEdit extends React.Component {
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


  async componentDidMount() {
    try {
      
      const userId = "5ec3aa51f5bcf8903360cf4d"
      const res = await axios.get(`/api/users/${userId}`)
      console.log(res.data)
      this.setState({ userData: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = event => {
    const userData = { ...this.state.userData, [event.target.name]: event.target.value }
    this.setState({ userData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const userId = "5ec3aa51f5bcf8903360cf4d"
      await editProfile(userId, this.state.userData)
      this.props.history.push(`/users/${userId}`)
    } catch (err) {
      console.log(err.response)
    }
  }

  handleAddImage = () => {
    const userData = { ...this.state.userData, image: [this.state.userData.image, ''] }
    this.setState({ userData })
    console.log(userData)
  }

  handleImageChange = (event, i) => {
    console.log(event.target.name)
    console.log(event.target.value)
    const images = [...this.state.userData[event.target.name]]
    const newImages = images.map((image, index) => {
      if (i === index) return event.target.value
      return image
    })
    const userData = { ...this.state.userData, [event.target.name]: newImages }
    this.setState({ userData })
  }

  addToPref = (event) => {
    // const {tripPrefs} = this.state.userData
    // if (tripPrefs.includes(event.target.id) {
    //     // * remove it and change colour
    // } else {
    //   //* add it and change colour
    // })
    console.log(event.target.id)
  }
  
  render() {
    const { username, name, garage, dreamTrips, profilePhoto, recentTrips, bio, homeBase, email, tripPrefs } = this.state.userData
    return (

   <section>
   <>
<h1> Edit your profile</h1>
<form onSubmit={this.handleSubmit}>
  <div className="edit-profile-details">
  <h3>Name</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="name"
  name="name"
  onChange={this.handleChange}
  value={name ? name : ""}
  />
  </div>

<h3>username</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="username"
  name="username"
  onChange={this.handleChange}
  value={username ? username : ""}
  />
  </div>

<h3>Email</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="email"
  name="email"
  onChange={this.handleChange}
  value={email ? email : ""}
  />
  </div>

<h3>Home Base</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="home base"
  name="homeBase"
  onChange={this.handleChange}
  defaultValue={this.homeBase ? homeBase : ""}
  />
  </div>

<h3>Garage</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="whats your ride?"
  name="garage"
  onChange={this.handleChange}
  defaultValue={garage ? garage : ""}
  />
  </div>

<h3>Dream Trips</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="dream trip"
  name="dreamTrips"
  onChange={this.handleChange}
  defaultValue={dreamTrips ? dreamTrips : ""}
  />
  </div>

<h3>Bio</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="bio"
  name="bio"
  onChange={this.handleChange}
  defaultValue={bio ? bio : ""}
  />
  </div>
  </div>
 

<div className="edit-profile-photos">
<div className="input-box">
  <h3>Pfoile Photo</h3>
  {this.state.image.map((image, index) => {
    return (
<ImageUpload 
  key={index}
  onChange={args => this.handleImageChange(args, index)}
  name="profilePhoto"
  />
    )
  })}
   <button onClick={this.handleAddImage}>Add Another Image</button>

<brb></brb><br></br>
<h3>Recent Trips Photos</h3>
{this.state.image.map((image, index) => {
    return (
<ImageUpload 
  key={index}
  onChange={args => this.handleImageChange(args, index)}
  name="recentTrips"
  />
    )
  })}
  
  <button onClick={this.handleAddImage}>Add Another Image</button>
</div>
</div>

<div className="edit-profile-icons">
<h3>PREFERENCES</h3>
          <SVG>
          {icons.map(icon =><p onClick={this.addToPref} key={icon.name} data-tip data-for={icon.name}>{icon.value}{icon.name}</p>)}
          </SVG>
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
  <button type="submit">Submit</button>
</form>
</>
   
 </section> 
    )
  }
}

export default ProfileEdit