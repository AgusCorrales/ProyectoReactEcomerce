import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../contex/UserContex/UserState';
import { LoadingOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Spin, Card } from 'antd';
import './Profile.scss'


const Profile = () => {
    const { getLoggedUserInfo, user, token } = useContext(UserContext);

    useEffect(() => {
        getLoggedUserInfo();
    }, [token])
    if (!user) {
        return <Spin
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
            <Card className="profile-info">
                <div className="profile-details">
                    <h3><UserOutlined /> {user.name} {user.lastname}</h3>
                    <h3><MailOutlined /> {user.email}</h3>
                </div>
            </Card>
            <div className="orders-container">
                <h2>Orders</h2>
                <div className="orders">
                    {user.Orders.map(order => (
                        <div className="order-card" key={order.id}>
                            <h5>Order: {order.id}</h5>
                            <ul>
                                {order.Products.map(product => (
                                    <li key={product.id}>
                                        {product.name} - ${product.price}
                                    </li>
                                ))}
                            </ul>
                            <p>Total: ${calculateTotal(order.Products)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



export default Profile