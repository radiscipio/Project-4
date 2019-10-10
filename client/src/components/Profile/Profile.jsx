import React from 'react'
import './profile.css'
import { Link } from 'react-router-dom'

function Profile(props) {
  console.log('this is props', props)
  return (
    <div>
      <div className='profile-container'>
        <div>
          <div>{props.currentUser && props.currentUser.email}</div> 
        </div>
        <div className='name-container'>
          <form onSubmit={props.updateUserInfo}>
            <input
              type='text'
              name='first_name'
              placeholder='First Name'
              value={props.updateInfo.first_name}
              onChange={(e) => props.handleChange(e, 'updateInfo')}
            />
            <input
              type='text'
              name='last_name'
              placeholder='Last Name'
              onChange={(e) => props.handleChange(e, 'updateInfo')}
              value={props.updateInfo.last_name}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
      <a className='delete' onClick={props.destroyUser}>Click here to delete your profile</a>
    </div>

  )
}

export default Profile