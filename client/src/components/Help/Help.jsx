import React from 'react'
import './help.css'

function Help() {
  return (
    <div>
      <div className='help-container'>
        <div>
          <div className='problem'>Looks like you've got a problem. Let us know what we can do to help!</div>
          <div className='contact'><a href="https://www.linkedin.com/in/radiscipio/">Contact us here</a></div>
        </div>
        <div className="dog-container">
          <div className="apology">Sorry you had some trouble. Here's a photo of two really awesome dogs to make you feel better!</div>
          <div>
            <img className="dog-pic" src={("https://res.cloudinary.com/radiscipio/image/upload/v1574650536/swhy7qol3hz1cit335sa.jpg")} alt="img"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help