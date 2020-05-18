import React from 'react'
import axios from 'axios'

import Modal from 'react-modal';

import ReactTooltip from "react-tooltip"
import SVG from 'react-inlinesvg'
import  { icons } from  '../../styles/all-icons'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


class Profile extends React.Component {
  state = {
    showModal: false,
    user: {
      name: null,
      username: null,
      email: null,
      homeBase: null,
      garage: null,
      dreamTrips: null, 
      recentTrips: [],
      profilePhoto: [],
      bio: null,
      tripPrefs: [],
    },
    userTrips: []
  }

  async componentDidMount() {
    try {
      
      // const userId = this.props.match.params.id
      const res = await axios.get(`/api/users/5ec2c4fab9174e18b4b81238`)
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

   handleOpenModal = () => {
    this.setState({ showModal: true })
  }
  
   handleCloseModal = () => {
    this.setState({ showModal: false })
  }
  
  

  render() {
    const { username, name, garage, dreamTrips, profilePhoto, recentTrips, bio, homeBase, tripPrefs } = this.state.user
    const filteredIcons = icons.filter(icon => tripPrefs.includes(icon.name))
    const modalStyle = {
    content : {
            position: "fixed",
            left: "25%",
            border: "1px solid rgb(204, 204, 204)",
            background: "rgba(15, 15, 15, 0.8)",
            overflow: "auto",
            borderRadius: "20px",
            padding: "20px",
            width: "40%",
            height: "55%"
  }
}
    return (
      <section>


<div>
        {/* <button onClick={this.handleOpenModal}>Trigger Modal</button> */}
        <Modal 
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          ariaHideApp={false}
          style = {modalStyle}
        >
          
          <Carousel
          
          infiniteLoop
          centerMode
          dynamicHeight={true}
          width="500px">
            {profilePhoto.map(photo => <div key={photo} className="carousel-item">
            <img src={photo} alt="" className="carousel-image"/> 
            </div>)}
        </Carousel>
          
         
          <button style={{ background: "red", borderRadius: "30px", color: "white" }} onClick={this.handleCloseModal}>X</button>
        </Modal>
      </div>

        <div className="cover">
          <div className="cover-left">
            <div className="cover-left-image">
            <div onClick={this.handleOpenModal} style={{background: "yellow", height: "200px", width: "300px"}}>
              <img className="display-image" src={profilePhoto[0]}
                alt=""
                height="200px" />
                {/* <button style={{ background: "#fa6400", borderRadius: "30px", color: "white", fontSize: "12px"}} className="open-modal" onClick={this.handleOpenModal}>+</button> */}
                </div>
            </div>
            <div className="cover-left-title">{username}</div>
            <div className="cover-left-subtitle">{name}</div>
          </div>
          <div className="cover-right">
            <img src={recentTrips[0]} 
            className="image"
              alt=""
              height="700" />
          </div>
        </div>
        {/* <SVG>
        {filteredIcons.map(icon => icon.value)}
        </SVG> */}

        
        
        <div className="recent-trips-title">
            Recent Trips
            </div>
        <div className="recent-trips">
          <div className="bio-div">
          <div className="bio">
            Home base <span style={{color: "#fa6400"}}>{homeBase}</span> <hr></hr><br></br>
            In the garage <span style={{color: "#fa6400"}}>{garage}</span> <hr></hr><br></br>
            Ultimate Trip <span style={{color: "#fa6400"}}>{dreamTrips}</span><hr></hr><br></br>
         <h4>INTERESTS</h4>
           {filteredIcons.map(icon =>  <ReactTooltip key={icon.name} id={icon.name} place="top" effect="solid">{icon.name}</ReactTooltip>)}
          <SVG>
          {filteredIcons.map(icon =><label key={icon.name} data-tip data-for={icon.name}>{icon.value}</label>)}
          </SVG>
           

            </div>
            <div className="profile-buttons">
            <button>Send Message</button>
            <button>Follow</button>
            </div>
            

          </div>

          <div className="caro-div">
            <Carousel
            infiniteLoop
            centerMode
            dynamicHeight={true}>
            
            {recentTrips.map(trip => 
              <div key={trip} className="carousel-item">
              <img src={trip} 
              // style={{ width: "400px" }}
                alt=""
                className="carousel-image" />
              <p className="legend"></p>
            </div>)}
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