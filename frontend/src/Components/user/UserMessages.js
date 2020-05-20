import React from 'react'
import axios from 'axios'
import { getOwnProfile } from '../../lib/api'

class UserMessages extends React.Component {
  state = {
    user: null
  }
  async componentDidMount() {
    try {


      const res = await getOwnProfile()
      this.setState({ user: res.data })
      console.log(this.state.user)
    } catch (err) {
      console.log(err)
    }
  }

  // set the profile to state which contains all the info of sent and recieved messages

  // 
  // filterSent = () => {
  //   const res = {
  //     this.state.user.filter(obj => (
  //       obj.messages.recipient.username === this.state.username
  //     ))
  //   }
  //   console.log('sent', res)
  // }

  // filterReceived = () => {
  //   const res = {state.user.filter(obj => (
  //       obj.messages.sender.username === this.state.username
  //     ))
  //   }
  //   console.log('received', res)
  // }


  render() {
    const { user } = this.state
    if (!user) return <p>Loading</p>
    if (user.messages.length === 0) return null
    return (
      <section>
        <p>hi</p>
        {user.messages.map(obj => (
          <div>
            <p>To: {obj.recipient.username}</p>
            <p>{obj.text}</p>
            <p>To: {obj.sender.username}</p>
          </div>

        ))}
      </section>
    )
  }
}

export default UserMessages