import React from 'react'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: '',
    },
    error: ''
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData, error: '' })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await loginUser(this.state.formData)
      setToken(res.data.token)
      this.props.history.push('/trips')
    } catch (err) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }

  render() {
    const { formData } = this.state
    return (
      <div>
        <h1>LOG IN</h1>
        <form onSubmit={this.handleSubmit}>
  
        <label> Email: </label>         
        <input type="email" 
        name="email"
        onChange={this.handleChange}
        value={formData.email}
        />

        <label> Password: </label>         
        <input type="password" 
        name="password"
        onChange={this.handleChange}
        value={formData.password}
        />
        <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default Login