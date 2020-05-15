import React from 'react'
import { registerUser } from '../../lib/api'

class Register extends React.Component {
  state = {
    formData: {
      username: '',
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    errors: {}
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    const errors = { ...this.state.errors, [event.target.name]: '' }
    this.setState({ formData, errors })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      await registerUser(this.state.formData)
      this.props.history.push('/login')
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
    const { formData } = this.state
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
        <label> Username: </label>         
        <input type="text" 
        name="username"
        onChange={this.handleChange}
        value={formData.username}
        />  

        <label> Name: </label>     
        <input type="text" 
        name="name"
        onChange={this.handleChange}
        value={formData.name}
        /> 

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

        <label> Confirm Password: </label>         
        <input type="password" 
        name="passwordConfirmation"
        onChange={this.handleChange}
        value={formData.passwordConfirmation}
        />

        <button type='submit'>Register</button>
        </form>
      </div>
    )
  }
}

export default Register