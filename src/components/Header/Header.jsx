import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { UserContext } from '../../contex/UserContex/UserState';


const Header = () => {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <span className='nav-link'><Link to="/">Home</Link></span>
        {token ? (
          <>
            <span className='nav-link'><Link to="/profile">Profile</Link></span>
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <span className='nav-link'><Link to="/login">Login</Link></span>
            <span className='nav-link'><Link to="/register">Register</Link></span>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;