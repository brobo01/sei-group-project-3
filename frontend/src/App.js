import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/common/Home'
import Register from './Components/authentication/Register'
import Login from './Components/authentication/Login'
import TripsIndex from './Components/trips/tripsIndex'
import TripShow from './Components/trips/tripShow'
import TripEdit from './Components/trips/tripEdit'
import TripNew from './Components/trips/TripNew'
import TripSearch from './Components/trips/TripSearch'
import TripMap from './Components/trips/TripMap'
import Navbar from './Components/common/Navbar'
import Error from './Components/common/Error'

import Footer from './Components/common/Footer'
import ProfileEdit from './Components/user/ProfileEdit'
import Profile from './Components/user/Profile'


const App = () => {
  return (
    <div className="background-image">
      <div className="background">

        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/trips/:id/edit" component={TripEdit} />
            <Route path="/trips/new" component={TripNew} />
            <Route path="/trips/map" component={TripMap} />
            <Route path="/trips/:id" component={TripShow} />
            <Route path="/trips" component={TripsIndex} />
            <Route path="/users/:userId/edit" component={ProfileEdit} />
            <Route path="/users/:userId" component={Profile} />
            <Route path="/search" component={TripSearch} />
            <Route path="/*" component={Error} />

          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
