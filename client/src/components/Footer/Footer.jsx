import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-main'>
      <div>
        <a href='https://github.com/radiscipio'><i className="fab fa-github-square fa-2x"></i></a>
        <a href='https://www.linkedin.com/in/radiscipio/'><i className="fab fa-linkedin fa-2x"></i></a>
      </div>
      <div>This website was made by Robert di Scipio</div>
      <div>This is not a real company</div>
    </div>
  )
}

export default Footer