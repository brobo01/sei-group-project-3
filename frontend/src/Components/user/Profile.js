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

        <div className="cover">
          <div className="cover-left">
            <div className="cover-left-image">
              <img src='https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/14618/thumb_Screen_Shot_2019-05-30_at_16.42.14.png' height="100"/>
            </div>
            <div className="cover-left-title">{user.username}Jack May</div>
            <div className="cover-left-subtitle">{user.name}@syntacticsugarbear</div>
          </div>
          <div className="cover-right">
            <img src='https://www.kunstler.it/wp-content/uploads/2017/07/MG_3533.jpg' className="image" height="700"/>
          </div>
        </div>
          
          <p>{user.garage}</p>

          <div className="recent-trips">
            <div className="title">
              Recent Trips
            </div>
            <div className="carousel">
              <img src='https://www.kunstler.it/wp-content/uploads/2017/07/MG_3533.jpg' height='200' className="image"/>
              <img src='https://expertvagabond.com/wp-content/uploads/ring-road-iceland-guide-900x600.jpg' height='200' className="image"/>
              <img src='https://independenttravelcats.com/wp-content/uploads/2017/10/NC500-Roads-8.jpg' height='200' className="image"/>
            </div>
          </div>

          <div className="recent-trips">
            <div className="title">
              Pictures
            </div>
            <div className="carousel">
          {user.profilePhoto?.map((photo, index) => (
            <img key={index} src={photo} alt="profile photo" />
            ))}
            </div>
          </div>

          <div className="recent-trips">
            <div className="title">
              Dream Trips
            </div>
          <p>{user.dreamTrips}</p>
          <div className="carousel">
            <img src='https://www.kunstler.it/wp-content/uploads/2017/07/MG_3533.jpg' height='200' className="image"/>
            <img src='https://expertvagabond.com/wp-content/uploads/ring-road-iceland-guide-900x600.jpg' height='200' className="image"/>
            <img src='https://independenttravelcats.com/wp-content/uploads/2017/10/NC500-Roads-8.jpg' height='200' className="image"/>
          </div>
        </div>

      </section>
    )
  }

}

export default Profile