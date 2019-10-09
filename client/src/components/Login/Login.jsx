import React from 'react'
import './login.css'

function Login() {
  return (
    <div className='auth-container'>
      <div className='login-form'>
        <div className='auth-heading'>Login Form</div>
        <div>
          <form className='input-form'>
            <input
              className='input-box'
              type='text'
              name='username'
              placeholder='Username'
            />
            <input
              className='input-box'
              type='password'
              name='password'
              placeholder='Password'
            />
          </form>
          <button className='form-submit'>Submit</button>
        </div>
      </div>
      <div className='register-form'>
        <div className='auth-heading'>Register Form</div>
        <div>
          <form className='input-form'>
            <input
              className='input-box'
              type='text'
              name='username'
              placeholder='Username'
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
              name='password'
              placeholder='Confirm Password'
              />
          </form>
              <button className='form-submit'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login