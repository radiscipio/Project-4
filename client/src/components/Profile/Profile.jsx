import React from 'react'
import './profile.css'
import { Link } from 'react-router-dom'

function Profile(props) {
  console.log('this is props', props)
  return (
    <div>
      <h2 className='details'>Your Details</h2>
      <div className='profile-container'>
        <div className='name-container'>
          <div>Email: {props.currentUser && props.currentUser.email}</div>
          <div>First Name: {props.currentUser && props.currentUser.first_name}</div>
          <div>Last Name: {props.currentUser && props.currentUser.last_name}</div>
        </div>
        <div className='name-submit'>
          <form
            className='name-form'
            onSubmit={props.updateUserInfo}>
            <input
              className='input-box'
              type='text'
              name='first_name'
              placeholder='First Name'
              value={props.updateInfo.first_name}
              onChange={(e) => props.handleChange(e, 'updateInfo')}
            />
            <input
              className='input-box'
              type='text'
              name='last_name'
              placeholder='Last Name'
              onChange={(e) => props.handleChange(e, 'updateInfo')}
              value={props.updateInfo.last_name}
            />
            <button className='submit-name'>Submit</button>
          </form>
        </div>
      </div>
      <a className='delete' onClick={props.destroyUser}>Click here to delete your profile</a>
    </div>

  )
}

export default Profile