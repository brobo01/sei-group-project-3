import React from 'react'
import { registerUser } from '../../lib/api'
import { Link } from 'react-router-dom'

import RTimage from '../../styles/assets/roadtrippers.png'

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
      console.log(err.response)
      this.setState({ errors: err.response.data })
      console.log(this.state.errors)
    }
  }



  handleError = () => {
    if (this.state.errors === `Path is required`) return 'required field'
  }


  render() {
    const { formData, errors } = this.state
    return (
      <div className="section">
        <div className="header">
          <div className="header-left">
            <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} height="50" /></Link>
          </div>
          <div className="header-right">
          {<button onClick={this.props.history.goBack} className="back-button" type="button">Back</button>} 
          </div>
        </div>        
        <div className="container">
          <img className="logo" src="https://i.ya-webdesign.com/images/alphabet-biker-png-2.png"
            alt=""
            height="100" />
          <div className="title">Register</div>
          <form onSubmit={this.handleSubmit}>
            <div className="form">
              <div className="form-item">
                <label> Username </label>
                <input type="text"
                  name="username"
                  onChange={this.handleChange}

                />
              </div>
              <div className="error-msg">
                {errors.username && <small>{errors.username}</small>}
              </div>


              <div className="form-item">
                <label> Name </label>
                <input type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={formData.name}
                  className={errors.name ? 'error' : ''}
                />
              </div>
              <div className="error-msg">
                {errors.name && <small>{errors.name}</small>}
              </div>


              <div className="form-item">
                <label> Email: </label>
                <input type="email"
                  name="email"
                  onChange={this.handleChange}
                  value={formData.email}
                  className={errors.email ? 'error' : ''}
                />
              </div>
              <div className="error-msg">
                {errors.email && <small>{errors.email}</small>}
              </div>


              <div className="form-item">
                <label> Home Base: </label>
                <input type="text"
                  name="homeBase"
                  onChange={this.handleChange}
                  value={formData.homeBase}
                  className={errors.homeBase ? 'error' : ''}
                />
              </div>
              <div className="error-msg">
                {errors.homeBase && <small>{errors.homeBase}</small>}
              </div>


              <div className="form-item">
                <label> Password: </label>
                <input type="password"
                  name="password"
                  onChange={this.handleChange}
                  value={formData.password}
                  className={errors.password ? 'error' : ''}
                />
              </div>
              <div className="error-msg">
                {errors.password && <small>{errors.password}</small>}
              </div>


              <div className="form-item">
                <label> Confirm Password: </label>
                <input type="password"
                  name="passwordConfirmation"
                  onChange={this.handleChange}
                  value={formData.passwordConfirmation}
                  className={errors.passwordConfirmation ? 'error' : ''}
                />
              </div>
              <div className="error-msg">
                {errors.passwordConfirmation && <small>{errors.passwordConfirmation}</small>}

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