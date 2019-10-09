import React from 'react'
import './login.css'

class Login extends React.Component {

  render() {
    return (
      <div className='auth-container'>
        <div className='form'>
          <div className='auth-heading'>Welcome back!</div>
          <div>
            <form className='input-form'>
              <input
                className='input-box'
                type='text'
                name='email'
                placeholder='Email'
                handleChange={this.props.handleChange}
              />
              <input
                className='input-box'
                type='password'
                name='password'
                placeholder='Password'
                handleChange={this.props.handleChange}
              />
            </form>
            <button className='form-submit'>Submit</button>
          </div>
        </div>
        <div className='form'>
          <div className='auth-heading'>Don't have an account?</div>
          <div className='register'>Register here</div>
          <div>
            <form className='input-form'>
              <input
                className='input-box'
                type='text'
                name='email'
                placeholder='Email'
              />
              <input
                className='input-box'
                type='password'
                name='password'
                placeholder='Password'
              />
              <input
                className='input-box'
                type='password'
                name='passwordConfirmation'
                placeholder='Confirm Password'
                />
            </form>
                <button className='form-submit'>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login