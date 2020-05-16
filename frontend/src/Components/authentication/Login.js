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
        <div className="section">
          <div className="container">
            <img className="logo" src="https://i.ya-webdesign.com/images/alphabet-biker-png-2.png"
            alt="" 
            height="100"/>
            <div className="title">Log In</div>
              <form onSubmit={this.handleSubmit}>
                <div className="form">
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
                  <button type='submit' className="submit-btn">Login</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    )
  }
}

export default Login