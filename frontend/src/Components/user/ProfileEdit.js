import React from 'react'
import axios from 'axios'
import ImageUpload from './ImageUpload'
import ReactTooltip from "react-tooltip"
import { icons } from "../../styles/assets/icon-data"
import { editProfile } from '../../lib/api'
// import ProfileDetails from './ProfileDeets'

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
      tripPrefs: ['']
    }
    // image: ['']
  }


  async componentDidMount() {
    try {
      const userId = "5ec52e53837d547b3dfc7459"
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
      const userId = "5ec52e53837d547b3dfc7459"
      await editProfile(userId, this.state.userData)
      this.props.history.push(`/users/${userId}`)
    } catch (err) {
      console.log(err.response)
    }
  }

  handleAddProfileImage = (event) => {
    const userData = { ...this.state.userData, profilePhoto: [...this.state.userData.profilePhoto] }
    userData.profilePhoto[userData.profilePhoto.length - 1] = event.target.value
    console.log(userData)
    this.setState({ userData })
  }

  handleAddExtraImage = () => {
    const userData = { ...this.state.userData, profilePhoto: [...this.state.userData.profilePhoto, ''] }
    console.log(userData)
    this.setState({ userData })
  }

  // handleAddTripsImage = () => {
  //   const userData = { ...this.state.userData, recentTrips: [...this.state.userData.recentTrips, ''] }
  //   this.setState({ userData })
  // }
  // handleTripsImageChange = (event) => {
  //   const value = event.target.value
  //   const userData = { ...this.state.userData, recentTrips: value }
  //   this.setState({ userData })
  // }


  // handleAddTripsImage = () => {
  //   const image = { ...this.state, image: [...this.state.image, ''] }
  //   this.setState({ image })
  // }
  // handleTripsImageChange = (event, i) => {
  //   const images = [...this.state.userData.recentTrips]
  //   const newImages = images.map((image, index) => {
  //     if (i === index) return event.target.value
  //     return image
  //   })
  //   const userData = { ...this.state.userData, recentTrips: newImages }
  //   this.setState({ userData })
  // }


  addToPref = (event) => {
    const icon = event.target.id
    const tripPrefsEdit = this.state.userData.tripPrefs
    const index = tripPrefsEdit.indexOf(icon)
    if (tripPrefsEdit.includes(icon)) {
        tripPrefsEdit.splice(index, 1)
        const color = ""
        const userData = { ... this.state.userData, tripPrefs: tripPrefsEdit}
        this.changeCSS(icon, color)
        this.setState({ userData }) 
    } else {
      tripPrefsEdit.push(icon)
      const color = "white"
      const userData = { ... this.state.userData, tripPrefs: tripPrefsEdit}
      this.changeCSS(icon, color)
      this.setState({ userData })
    }
  }

  changeCSS = (icon, color) => {
    document.getElementById(icon).setAttribute("style", `color: ${color}`)
  }
  preloadCSS = (filteredIcons) => {
    filteredIcons.forEach(icon => 
      document.getElementById(icon.name).setAttribute("style", "color: white"))
  }


  render() {
    
    const { username, name, garage, dreamTrips, profilePhoto, recentTrips, bio, homeBase, email, tripPrefs } = this.state.userData
    console.log(profilePhoto)

    const filteredIcons = icons.filter(icon => tripPrefs.includes(icon.name))
    this.preloadCSS(filteredIcons)
    return (

   <section>
   <>
<h1> Edit your profile</h1>
<form onSubmit={this.handleSubmit}>
  <div className="top-section">
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

  {/* <ProfileDeets 
  title={'Name'}
  prop={name}
  onChange={handleChange}
  // value={name ? name : ""}
  /> */}

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
  <h3>Profile Photo</h3>

{this.state.userData.profilePhoto.map(photo => 
photo ? 
(<div>
<img style={{ width: "auto", height: "150px"}} src={photo} alt="selected"/>
</div>)
:
  (<ImageUpload 
  key={photo}
  onChange={this.handleAddProfileImage}
  name="profilePhoto"
  />)
  )}

    

<button type="button" onClick={this.handleAddExtraImage}>Add Another Image</button>

{/* { <h3 className="recentTrips">Recent Trips Photos</h3> }
{this.state.image.map((image, index) => {
    return (
<ImageUpload 
  key={index}
  onChange={this.handleTripsImageChange}
  name="recentTrips"
  />
    )
  })} */}
  
{/* {this.state.image.length < 4 && <button onClick={this.handleAddTripsImage}>Add Another Image</button> } */}
</div>
</div>
  </div>
 
  <h3>PREFERENCES</h3>
<div className="bottom-section">
<div className="edit-profile-icons">

     
          {icons.map(icon =><p className="icons" id={icon.name} onClick={this.addToPref} key={icon.name}>{icon.value}{icon.name} </p>)}
        
</div>
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