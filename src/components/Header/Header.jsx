  import React, { useContext, useEffect } from 'react'
  import {Link, useNavigate} from 'react-router-dom';
  import { UserContext } from '../../contex/UserContex/UserState';
  import { Badge } from 'antd';
  import {ShoppingCartOutlined} from "@ant-design/icons";
  import { ProductContext } from '../../contex/ProductContext/ProductState';
  import './Header.scss'


  const Header = () => {
    const { token, logout } = useContext(UserContext);
    const {cart} = useContext(ProductContext);
    const navigate = useNavigate();

    useEffect(()=>{
      localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

    return (
      <div className='container'>
        <nav>
          <span className='nav-link'><Link to="/"> Home </Link></span>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit"><Link to="./product">Search</Link></button>
          </div>
          <span className='nav-link'><Link to="/product"> Product </Link></span>
          {token ? (
            <>
              <span className='nav-link'><Link to="/profile"> Profile </Link></span>
              <span className='nav-link'><Link to="/cart"><Badge count={cart.length} size="small"><ShoppingCartOutlined /></Badge></Link></span>
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
              <span className='nav-link'><Link to="/login"> Login </Link></span>
              <span className='nav-link'><Link to="/register"> Register </Link></span>
            </>
          )}
        </nav>
      </div>
    );
  };

  export default Header;