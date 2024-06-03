import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contex/UserContex/UserState';
import { Badge } from 'antd';
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { ProductContext } from '../../contex/ProductContext/ProductState';
import './Header.scss'



const Header = () => {
  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <div className='container'>
      <nav>
        <span className='nav-link'><Link to="/"><HomeOutlined /> Home</Link></span>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <Link to="./product"><button className='button'>Search</button></Link>
        </div>
        <span className='nav-link'><Link to="/product"> Product </Link></span>
        {token ? (
          <>
            <span className='nav-link'><Link to="/profile"> Profile </Link></span>
            <span className='nav-link'><Link to="/cart">Cart<Badge count={cart.length} size="small"><ShoppingCartOutlined size="small" /></Badge></Link></span>
            <button className='btn'
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
              <div class="text"> Logout</div>
            </button>
          </>
        ) : (
          <>
            <span className='nav-link'><Link to="/login"> Login </Link></span>
            <span className='nav-link'><Link to="/register"> Register </Link></span>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;