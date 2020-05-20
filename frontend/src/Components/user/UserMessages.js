import React from 'react'
import axios from 'axios'
import { getMessages } from '../../lib/api'

class UserMessages extends React.Component {
  state = {
    users: []
  }

  async componentDidMount() {
    try {
      const res = await getMessages()
      this.setState({ users: res.data })

    } catch (err) {
      console.log(err)
    }
  }

  // messages that were sent to you - this will be on your own user-schema, filter for user schema

  receivedMessages = () => {


    const res = this.state.users.filter(user => (
      user._id === '5ec42bd6298b126482a3e566'
    ))

    return res
  }

  // messages that were sent by you - this will be on other user's user-schema, filter for every instance of your id on a message
  //look through every user and return when it contains a message w/ 5ec42bd6298b126482a3e566 

  sentMessages = () => {

    const res = this.state.users.filter(user => (
      user.message.length > 0
    ))
    console.log(res)
    const rewNew = res.filter(item => (
      item.message._id === '5ec42bd6298b126482a3e566'
    ))
    console.log(rewNew)
  }



  render() {

    return (
      <section>
        {this.receivedMessages().map(item => (
          item.message.map(message => (
            <p>{message.text} from {message.user.username}</p>
          ))
        ))}


        {this.sentMessages().users}

      </section>
    )
  }
}

export default UserMessages