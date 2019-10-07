import React from 'react'
import './help.css'

function Help() {
  return (
    <div>
      <div className='help-container'>
        <div>
          <div className='problem'>Run into a problem?</div>
          <a href="https://www.linkedin.com/in/radiscipio/"><div>Contact us here!</div></a>
        </div>
        <div className="dog-container">
          <div className="apology">Sorry you had some trouble. Here's a photo of two really awesome dogs to make you feel better!</div>
          <div>
            <img className="dog-pic" src={("https://res.cloudinary.com/radiscipio/image/upload/v1570484903/evxm2017blfmc05fepel.jpg")} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help