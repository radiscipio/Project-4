import React from 'react'
import './profile.css'

function Profile(props) {
  return (
    <div>
      <div className='profile-container'>
        This is Profile
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
      <div className='delete' onClick={props.destroyUser}>Click here to delete your profile</div>
    </div>

  )
}

export default Profile