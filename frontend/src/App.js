import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SecureRoute from './components/common/SecureRoute'
import Home from './components/common/Home'
import Register from './components/authentication/Register'
import Login from './components/authentication/Login'
import TripsIndex from './components/trips/tripsIndex'
import TripShow from './components/trips/tripShow'
import TripEdit from './components/trips/tripEdit'
import TripNew from './components/trips/TripNew'
import TripSearch from './components/trips/TripSearch'
import TripMap from './components/trips/TripMap'
import Navbar from './components/common/Navbar'
import Error from './components/common/Error'

import Footer from './components/common/Footer'
import ProfileEdit from './components/user/ProfileEdit'
import Profile from './components/user/Profile'
import UserMessages from './components/user/UserMessages'


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
            <SecureRoute path="/trips/new" component={TripNew} />
            <Route path="/trips/map" component={TripMap} />
            <Route path="/trips/:id" component={TripShow} />
            <Route path="/trips" component={TripsIndex} />
            <Route path="/users/:userId/edit" component={ProfileEdit} />
            <Route path="/users/:userId" component={Profile} />
            <Route path="/search" component={TripSearch} />
            <Route path="/messages" component={UserMessages} />
            <Route path="/*" component={Error} />

          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
