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
                onChange={(e) => this.props.handleChange(e, 'authFormLogin')}
              />
              <input
                className='input-box'
                type='password'
                name='password'
                placeholder='Password'
                onChange={(e) => this.props.handleChange(e, 'authFormLogin')}
              />
            </form>
            <button className='form-submit'>Submit</button>
          </div>
        </div>
        <div className='form'>
          <div className='auth-heading'>Don't have an account?</div>
          <div className='register'>Register here</div>
          <div>
            <form
              className='input-form'
              onSubmit={this.props.handleRegister}
            >
              <input
                className='input-box'
                type='text'
                name='email'
                placeholder='Email'
                onChange={(e) => this.props.handleChange(e, 'authFormRegister')}
              />
              <input
                className='input-box'
                type='password'
                name='password'
                placeholder='Password'
                onChange={(e) => this.props.handleChange(e, 'authFormRegister')}
              />
              <input
                className='input-box'
                type='password'
                name='passwordConfirmation'
                placeholder='Confirm Password'
                onChange={(e) => this.props.handleChange(e, 'authFormRegister')}
              />
              <button  type='submit' className='form-submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login