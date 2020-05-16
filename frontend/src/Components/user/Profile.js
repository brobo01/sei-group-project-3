import React from 'react'
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

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


  // async getRoutes() {
  //   const res = await axios.get('/api/trips')
  //   const userTrips = res.filter(object => (
  //     object._id === this.props.match.params.userId
  //   ))
  //   console.log(userTrips)
  //   this.setState({ userTrips })
  // }

  render() {
    const { user } = this.state
    return (
      <section>

        <div className="cover">
          <div className="cover-left">
            <div className="cover-left-image">
              <img src='https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/14618/thumb_Screen_Shot_2019-05-30_at_16.42.14.png'
              alt=""
              height="100" />
            </div>
            <div className="cover-left-title">{user.username}Jack May</div>
            <div className="cover-left-subtitle">{user.name}@syntacticsugarbear</div>
          </div>
          <div className="cover-right">
            <img src='https://www.kunstler.it/wp-content/uploads/2017/07/MG_3533.jpg' className="image"
            alt=""
            height="700" />
          </div>
        </div>

        <p>{user.garage}</p>

        <div className="recent-trips">
          <div className="title">
            Recent Trips
            </div>
          <Carousel
            infiniteLoop
            centerMode
            dynamicHeight={true}
          >
            <div className="carousel-item">
              <img src='https://www.kunstler.it/wp-content/uploads/2017/07/MG_3533.jpg' 
              alt=""
              className="image carousel-image" />
              <p className="legend">Recent Trip 1</p>
            </div>
            <div className="carousel-item">
              <img src='https://expertvagabond.com/wp-content/uploads/ring-road-iceland-guide-900x600.jpg' 
              alt=""
              className="image carousel-image" />
              <p className="legend">Recent Trip 2</p>
            </div>
            <div className="carousel-item">
              <img src='https://independenttravelcats.com/wp-content/uploads/2017/10/NC500-Roads-8.jpg'
              alt=""
              className="image carousel-image" />
              <p className="legend">Recent Trip 3</p>
            </div>

          </Carousel>
        </div>






        {/* <div className="recent-trips">
          <div className="title">
            Recent Trips
            </div>
          <div className="carousel">
            <img src='https://www.kunstler.it/wp-content/uploads/2017/07/MG_3533.jpg' height='200' className="image" />
            <img src='https://expertvagabond.com/wp-content/uploads/ring-road-iceland-guide-900x600.jpg' height='200' className="image" />
            <img src='https://independenttravelcats.com/wp-content/uploads/2017/10/NC500-Roads-8.jpg' height='200' className="image" />
          </div>
        </div> */}

        <div className="recent-trips">
          <div className="title">
            Pictures
            </div>
          <div className="carousel">
            {user.profilePhoto?.map((photo, index) => (
              <img key={index} src={photo} alt="profile pic" />
            ))}
          </div>
        </div>

        <div className="recent-trips">
          <div className="title">
            Dream Trips
            </div>
          <p>{user.dreamTrips}</p>

          <div className="dream-trips">
            <Carousel
              infiniteLoop
              centerMode
              dynamicHeight={true}
            >
              <div className="carousel-item">
                <img src='https://www.kunstler.it/wp-content/uploads/2017/07/MG_3533.jpg' 
                alt=""
                className="image carousel-image" />
                <p className="legend">Dream Trip 1</p>
              </div>
              <div className="carousel-item">
                <img src='https://expertvagabond.com/wp-content/uploads/ring-road-iceland-guide-900x600.jpg'
                alt=""
                className="image carousel-image" />
                <p className="legend">Dream Trip 2</p>
              </div>
              <div className="carousel-item">
                <img src='https://independenttravelcats.com/wp-content/uploads/2017/10/NC500-Roads-8.jpg'
                alt=""
                className="image carousel-image" />
                <p className="legend">Dream Trip 3</p>
              </div>

            </Carousel>
          </div>

        </div>

      </section>
    )
  }

}

export default Profile

  // < div className = "carousel" >
  //   <img src='https://www.kunstler.it/wp-content/uploads/2017/07/MG_3533.jpg' height='200' className="image" />
  //   <img src='https://expertvagabond.com/wp-content/uploads/ring-road-iceland-guide-900x600.jpg' height='200' className="image" />
  //   <img src='https://independenttravelcats.com/wp-content/uploads/2017/10/NC500-Roads-8.jpg' height='200' className="image" />
  //         </div >