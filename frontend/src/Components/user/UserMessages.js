import React from 'react'
import axios from 'axios'
import { getOwnProfile } from '../../lib/api'
import { withHeaders } from '../../lib/auth'
import SingleMessage from './SingleMessage'

class UserMessages extends React.Component {
  state = {
    user: null,
    pending: ''
  }
  async componentDidMount() {
    try {
      const res = await getOwnProfile()
      this.setState({ user: res.data })

    } catch (err) {
      console.log(err)
    }
  }

  filterMessages = () => {
    const messageId = this.props.match.params.id
    console.log(messageId)
    const res = this.state.user.messages.filter(message => (
      message._id === messageId
    ))
    console.log(res)
  }

  handleSubmit = async e => {
    const messageId = this.props.match.params.id
    const userId = this.state.user._id
    try {
      e.preventDefault()
      e.target.reset()
      const res = await axios.post(`/api/users/${userId}/${messageId}`, { text: this.state.pending }, withHeaders())
      console.log(res.data)
      this.setState((state, props) => {
        console.log(state.user.messages)
        state.user.messages.find(({ _id }) => {
          return _id === res.data._id
        }).comment = res.data.comment
        return state
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    const text = e.target.value
    console.log(text)
    this.setState({ pending: text })
  }

  render() {
    const { user } = this.state
    if (!user) return <p>Loading</p>

    return (
      <section>
        <h1>Your Messages</h1>

        <div>
          <p>Your conversation with: </p>
          <p>{this.filterMessages()}</p>


          <br />

          <div>
            <form onSubmit={this.handleSubmit}>
              <textarea
                placeholder="Leave a message..."
                className="comment-input"
                onChange={this.handleChange}
              />
              <button className="comment-btn">+</button>
            </form>
          </div>

        </div>


      </section>
    )
  }
}

export default UserMessages