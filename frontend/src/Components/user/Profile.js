import React from 'react'
import axios from 'axios'

class Profile extends React.Component {
  state = {
    user: {},
    userTrips: []
  }

  async componentDidMount() {
    try {
      const userId = this.props.match.params.userId
      console.log(this.props.match.params.userId)
      const res = await axios.get(`/api/users/${userId}`)
      this.setState({ user: res.data })

    } catch (err) {
      console.log(err)
    }
  }


  async getRoutes() {
    const res = await axios.get('/api/trips')
    const userTrips = res.filter(object => (
      object._id === this.props.match.params.userId
    ))
    console.log(userTrips)
    this.setState({ userTrips })
  }

  render() {
    const { user } = this.state
    return (
      <section>
        <h1>{user.username}</h1>
        <h2>{user.name}</h2>
        <p>{user.garage}</p>
        <p>{user.dreamTrips}</p>
        {user.profilePhoto?.map((photo, index) => (
          <img key={index} src={photo} alt="profile photo" />
        ))}
      </section>
    )
  }

}

export default Profile