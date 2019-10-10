import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

class Header extends React.Component {

  render() {

    return (
      <div className='header-container'>
        <Link className='logo-link' to="/"><h1>Barry's</h1></Link>
        <div className='links-container'>
          <div className='nav-bar'><Link className='links' to="/">Home</Link></div>
          <div className='nav-bar'><Link className='links' to="/Products">Products</Link></div>
          <div className='nav-bar'><Link className='links' to="/Help">Help</Link></div>
          {
            this.props.currentUser ? (
              <>
                <div className='nav-bar'><Link className='links' to="/Profile">Profile</Link></div>
                <div className='nav-bar'><a className='links' onClick={this.props.handleLogout}>Logout</a></div>
              </>
            ) : (
                <div className='nav-bar'><Link className='links' to="/Login">Login</Link></div>
              )
          }
          <i className="fas fa-shopping-cart fa-lg"></i>
        </div>
      </div>
    )
  }
}

export default Header