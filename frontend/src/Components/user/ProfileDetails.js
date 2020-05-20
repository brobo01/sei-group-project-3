import React from 'react'

const ProfileDetails = ({ name, title, value, handleChange }) => {
  // console.log()
  return (
<>
<h3>{title}</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="name"
  name={name}
  value={value ? value : ""}
  onChange={handleChange}
  />
  </div>
</>
  )

}

export default ProfileDetails