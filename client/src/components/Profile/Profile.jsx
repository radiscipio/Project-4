import React from 'react'
import './profile.css'

function Profile(props) {
  return (
    <div>
      <div className='profile-container'>
        This is Profile
        <div className='delete' onClick={props.destroyUser}>Click here to delete your profile</div>
      </div>
    </div>
  )
}

export default Profile