import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/common/Home'
import Register from './Components/authentication/Register'
import Login from './Components/authentication/Login'
import TripsIndex from './Components/trips/tripsIndex'
import TripShow from './Components/trips/tripShow'
import Navbar from './Components/common/Navbar'



const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path = "/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/trips/:id" component={TripShow} />
        <Route path="/trips" component={TripsIndex} />
      </Switch>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
