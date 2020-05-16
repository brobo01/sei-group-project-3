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
      <div className="section">
        <div className="container">
          <img className="logo" src="https://i.ya-webdesign.com/images/alphabet-biker-png-2.png" 
          alt=""
          height="100"/>
          <div className="title">Register</div>
              <form onSubmit={this.handleSubmit}>
            <div className="form">
                <div className="form-item">
                  <label> Username: </label>         
                  <input type="text" 
                  name="username"
                  onChange={this.handleChange}
                  value={formData.username}
                  />  
                </div>

                <div className="form-item">
                  <label> Name: </label>     
                  <input type="text" 
                  name="name"
                  onChange={this.handleChange}
                  value={formData.name}
                  /> 
                </div>

                <div className="form-item">
                  <label> Email: </label>         
                  <input type="email" 
                  name="email"
                  onChange={this.handleChange}
                  value={formData.email}
                  />
                </div>


                <div className="form-item">
                  <label> Password: </label>         
                  <input type="password" 
                  name="password"
                  onChange={this.handleChange}
                  value={formData.password}
                  />
                </div>

                <div className="form-item">
                  <label> Confirm Password: </label>         
                  <input type="password" 
                  name="passwordConfirmation"
                  onChange={this.handleChange}
                  value={formData.passwordConfirmation}
                  />
                </div>

                <button type='submit' className="submit-btn">Register</button>
          </div>
            </form>
        </div>
      </div>
    )
  }
}

export default Register