import React from 'react'
import axios from 'axios'
import { getProfile } from '../../lib/api'

class UserMessages extends React.Component {
  state = {
    users: []
  }

  async componentDidMount() {
    try {
      const res = getProfile()
      this.setState({ users: res.data })

    } catch (err) {
      console.log(err)
    }
  }

  // messages that were sent to you - this will be on your own user-schema, filter for user schema

  receivedMessages = () => {
    const res = 'hi'

    return res
  }

  // messages that were sent by you - this will be on other user's user-schema, filter for every instance of your id on a message the senders




  render() {

    return (
      <section>


      </section>
    )
  }
}

export default UserMessages