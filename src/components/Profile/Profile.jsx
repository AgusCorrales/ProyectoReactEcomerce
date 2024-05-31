import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../contex/UserContex/UserState';
import { LoadingOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Spin, Card } from 'antd';
import './Profile.scss'


const Profile = () => {
    const { getLoggedUserInfo, user, token} = useContext(UserContext);

    useEffect(()=>{
        getLoggedUserInfo();
    }, [token])
    if (!user){
        return  <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 24,
            }}
            spin
          />
        }
      />;
    }
    const calculateTotal = (products) => {
        let total = 0;
        products.forEach(product => {
            total += product.price;
        });
        return total;
    };
    return (
        <div className="profile-container">
        <Card className="profile-card">
          <h3>Profile: </h3>
          <p><UserOutlined/> {user.name} {user.lastname}</p>
          <p><MailOutlined/> {user.email}</p>
        </Card>
        <div className="order-list">
          <h4>Orders:</h4>
          {user.Orders.map(order => (
            <Card className="order-card" key={order.id}>
              <h5>Order: {order.id}</h5>
              <ul>
                {order.Products.map(product => (
                  <li key={product.id}>
                    {product.name} ${product.price}
                  </li>
                ))}
              </ul>
              <p>Total: ${calculateTotal(order.Products)}</p>
            </Card>
          ))}
        </div>
      </div>
    );
      
    };
            


export default Profile