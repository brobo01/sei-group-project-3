import React from 'react'
// import axios from 'axios'
import ImageUpload from './ImageUpload'
// import ReactTooltip from "react-tooltip"
import { icons } from "../../styles/assets/icon-data"
import { editProfile, getOwnProfile } from '../../lib/api'
import ProfileDetails from './ProfileDetails'

class ProfileEdit extends React.Component {
  state = {
    userData: {
      name: null,
      username: null,
      email: null,
      homeBase: null,
      garage: null,
      dreamTrips: null,
      recentTrips: [''],
      profilePhoto: [''],
      tripPrefs: ['']
    }
  }


  async componentDidMount() {
    try {
      const res = await getOwnProfile()
      this.setState({ userData: res.data })
    } catch (err) {
      console.log(err)
    }}

  handleChange = event => {
    console.log(event.target)
    const userData = { ...this.state.userData, [event.target.name]: event.target.value }
    this.setState({ userData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      await editProfile(this.state.userData)
      this.props.history.push('/profile')
    } catch (err) {
      console.log(err.response)
    }}

  handleAddImage = (event) => {
    if (event.target.name === 'profilePhoto') {
      const userData = { ...this.state.userData, profilePhoto: [...this.state.userData.profilePhoto] }
      userData.profilePhoto[userData.profilePhoto.length - 1] = event.target.value
      console.log(userData)
      this.setState({ userData })
    } else {
      const userData = { ...this.state.userData, recentTrips: [...this.state.userData.recentTrips] }
    userData.recentTrips[userData.recentTrips.length - 1] = event.target.value
    console.log(userData)
    this.setState({ userData })
    }}

  handleAddExtraImage = (e) => {
    if (e.target.name === 'profilePhoto') {
      const userData = { ...this.state.userData, profilePhoto: [...this.state.userData.profilePhoto, ''] }
      this.setState({ userData })
    } else {
      const userData = { ...this.state.userData, recentTrips: [...this.state.userData.recentTrips, ''] }
      this.setState({ userData })
    }}

    handleRemoveImage = (e) => {
      if (e.target.name === 'profilePhoto') {
       const photos = this.state.userData.profilePhoto.filter(photo => photo !== e.target.value)
       const userData= { ...this.state.userData, profilePhoto: photos} 
        this.setState({ userData })
      } else if (e.target.name === 'recentTrips'){
        const photos = this.state.userData.recentTrips.filter(photo => photo !== e.target.value)
        const userData= { ...this.state.userData, recentTrips: photos} 
         this.setState({ userData })
      }
    }

  addToPref = (event) => {
    const icon = event.target.id
    const tripPrefsEdit = this.state.userData.tripPrefs
    const index = tripPrefsEdit.indexOf(icon)
    if (tripPrefsEdit.includes(icon)) {
      tripPrefsEdit.splice(index, 1)
      const color = ""
      const userData = { ... this.state.userData, tripPrefs: tripPrefsEdit }
      this.changeCSS(icon, color)
      this.setState({ userData })
    } else {
      tripPrefsEdit.push(icon)
      const color = "white"
      const userData = { ... this.state.userData, tripPrefs: tripPrefsEdit }
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
    const { username, name, garage, dreamTrips, homeBase, email, tripPrefs } = this.state.userData
    const filteredIcons = icons.filter(icon => tripPrefs.includes(icon.name))
    this.preloadCSS(filteredIcons)

    return (
  <section className="edit-profile-page">
  <>
<h1 className="edit-title"> Edit your profile</h1>
<form onSubmit={this.handleSubmit}> 
<button className="finish-edit" type="submit">Finish Editting</button>
  <div className="top-section">
  <div className="edit-profile-details">

    {/* <ProfileDetails 
    name="username"
    onChange={this.handleChange}
    value={username ? username : ""}
    /> */}

  <h3>Name</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="name"
  name="name"
  handleChange={this.handleChange}
  value={name ? name : ""}
  />
  </div>

<h3>Username</h3>
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
  defaultValue={homeBase ? homeBase : ""}
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
  </div>
 

<div className="edit-profile-photos">
<h3 className="edit-title">Your Profile Photos</h3>
{this.state.userData.profilePhoto.length < 7 && 
<button
className="add-photo"
name="profilePhoto" 
type="button" 
onClick={this.handleAddExtraImage}>Add Another Profile Picture</button>}
<div className="photos-box">

<div className="edit-photos">
{this.state.userData.profilePhoto.map(photo => 
photo ? 
(<span>
<img key={photo} style={{ width: "150px", height: "84px", borderRadius: "15px"}} src={photo} alt="selected"/>
<button onClick={this.handleRemoveImage} 
name="profilePhoto" 
value={photo} 
type="button" 
className="delete-photo">X</button>
</span>)
:
  (<ImageUpload 
  key={photo}
  onChange={this.handleAddImage}
  name="profilePhoto"
  />)
  )}

</div>
</div>

<div className="photos-box"></div>
<h3 className="edit-title">Your Recent Photos</h3> 
{this.state.userData.recentTrips.length < 7 && 
<button 
className="add-photo"
type="button" 
name="recentTrips" 
onClick={this.handleAddExtraImage}>Add another Recent Photo</button> }
<div className="edit-photos">
{this.state.userData.recentTrips.map(photo => 
photo ? 
(
  <span>
<img key={photo} style={{ width: "150px", height: "84px", borderRadius: "15px"}} src={photo} alt="selected"/>
<button onClick={this.handleRemoveImage}
name="recentTrips" 
type="button" 
value={photo} 
className="delete-photo">X</button>
</span>
)
:
  (<ImageUpload 
  key={photo}
  onChange={this.handleAddImage}
  name="recentTrips"
  />)
  )}
</div> 

</div>
  </div>
  <h3 className="edit-title">Your Riding Style</h3>
<div className="bottom-section">
<div className="edit-profile-icons">
          {icons.map(icon =><p className="icons" id={icon.name} onClick={this.addToPref} key={icon.name}>{icon.value}{icon.name} </p>)}
        
</div>
</div>
            
          </form>
        </>
      </section>
    )
  }
}

export default ProfileEdit