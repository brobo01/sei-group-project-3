import React from 'react'
import axios from 'axios'


class getLatLong extends React.Component {
  state = {

  }

  async componentDidMount () {
    try{
      const res = await axios.get('http://open.mapquestapi.com/geocoding/v1/address?key=2X2ei5QqYNRJ7InGpBh7UIRRYdKv5AsJ&location=paris,france')
      console.log(res.data)
    } catch (err) {
      console.log(err)

    }
  }







}

export default getLatLong