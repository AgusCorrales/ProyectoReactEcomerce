import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav>
            <span className='nav-link'><Link to="/">Home</Link> </span>
            <span className='nav-link'><Link to="/login">Login</Link> </span>
            <span className='nav-link'><Link to="/register">Register</Link> </span>
            <span className='nav-link'><Link to="/profile">Profile</Link> </span>
        </nav>
    </div>
  )     
}

export default Header