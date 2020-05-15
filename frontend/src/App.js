import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/common/Home'
import TripsIndex from './Components/trips/tripsIndex'
import TripShow from './Components/trips/tripShow'


const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/trips/:id" component={TripShow} />
        <Route path="/trips" component={TripsIndex} />
      </Switch>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
