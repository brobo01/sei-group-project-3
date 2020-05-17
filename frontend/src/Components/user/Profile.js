import React from 'react'
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


class Profile extends React.Component {
  state = {
    user: {
      name: null,
      username: null,
      email: null,
      homeBase: null,
      garage: null,
      dreamTrips: null, 
      recentTrips: [],
      profilePhoto: [],
      bio: null
    },
    userTrips: []
  }

  async componentDidMount() {
    try {
      
      const userId = this.props.match.params.id
      const res = await axios.get(`/api/users/5ec1677d86db4bb27a34b098`)
      this.setState({ user: res.data })
      console.log(res.data)
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
    const { username, name, garage, dreamTrips, profilePhoto, recentTrips, bio, homeBase } = this.state.user
    return (
      <section>

        <div className="cover">
          <div className="cover-left">
            <div className="cover-left-image">
              <img className="display-image" src={profilePhoto[0]}
                alt=""
                height="200" />
            </div>
            <div className="cover-left-title">{username}</div>
            <div className="cover-left-subtitle">{name}</div>
            <button className="message">Send Message</button>
    {/* <div className="cover-left-garage">{homeBase}<br></br>In the garage:<br></br>{garage}</div> */}
          </div>
          <div className="cover-right">
            <img src={recentTrips[0]} 
            className="image"
              alt=""
              height="700" />
          </div>
        </div>

        
        <div className="title">
            Recent Trips
            </div>
        <div className="recent-trips">
          <div className="bio-div">
          <div className="bio">bio bits
            {homeBase} - In the garage - {garage}
            </div>
          </div>

<div className="caro-div">
<Carousel
            infiniteLoop
            centerMode
            dynamicHeight={true}>
            
            <div className="carousel-item">
              <img src={recentTrips[0]} 
              // style={{ width: "400px" }}
                alt="Morroco"
                className="carousel-image" />
              <p className="legend">Morroco</p>
            </div>
            <div className="carousel-item">
              <img src={recentTrips[1]}  
              // style={{ width: "400px" }}
                alt="Iceland"
                className="carousel-image" />
              <p className="legend">Iceland</p>
            </div>
            <div className="carousel-item">
              <img src={recentTrips[2]} 
              // style={{ width: "400px" }}
                alt="Scotland"
                className="carousel-image" />
              <p className="legend">Scotland</p>
            </div>
          </Carousel>
</div>
          
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

{/* 
        <div className="recent-trips">
          <div className="title">
            Pictures
            </div> */}
          {/* <div className="carousel">
            {profilePhoto?.map((photo, index) => (
              <img key={index} src={photo} alt="profile pic" />
            ))}
          </div> */}
        {/* </div> */}



        {/* <div className="recent-trips">
          <div className="title">
            Dream Trips
            </div>
          <p>{dreamTrips}</p>

          <div className="dream-trips"> */}
            {/* <Carousel
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

            </Carousel> */}
          {/* </div> */}

        {/* </div> */}

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