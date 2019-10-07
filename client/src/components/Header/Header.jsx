import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

class Header extends React.Component {

  state = {
    isOpen: false
  }

  render() {
    return (
      <div className='header-container'>
          <Link className='links' to="/"><h1>Barry's</h1></Link>
        <div className='links-container'>
          <div className='right-links'>
            <div><Link  className='links' to="/">Home</Link></div>
            <div><Link  className='links' to="/Products">Products</Link></div>
            <div><Link className='links' to="/Help">Help</Link></div>
            <div><Link className='links' to="/Profile">Profile</Link></div>
          </div>
          <i className="fas fa-shopping-cart fa-lg"></i>
        </div>
      </div>
    )
  }
}

export default Header