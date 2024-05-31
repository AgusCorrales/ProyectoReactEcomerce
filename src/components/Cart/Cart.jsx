import React, { useContext, useState } from 'react';
import { ProductContext } from '../../contex/ProductContext/ProductState';
import { Button, Empty, Result } from 'antd';
import { Link } from 'react-router-dom';
import orderService from '../../service/OrderServices';
import './Cart.scss';

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
  const [orderCreated, setOrderCreated] = useState(false);
  const user = JSON.parse(localStorage.getItem('User'))

  const handleCreateOrder = async () => {
        console.log(user);
    const cartIds = []
    cart.forEach(element => {
        cartIds.push(element.id)
    });
    console.log(cartIds);
    console.log(user);
    const orderData = {
        "UserId" : user.id,
        "ProductId": cartIds
    }
      await orderService.createOrder(orderData);
      setOrderCreated(true);
      clearCart();
  };

  if (orderCreated) {
    return (
        <div className="cart-container empty-container">
      <Result
        status="success"
        title="Purchase Successfully"
        extra={[
          <Button type="primary" key="console">
            <Link to="/profile">Go to Profile</Link>
          </Button>,
          <Button key="buy">
            <Link to="/product">Buy Again</Link>
          </Button>,
        ]}
      />
      </div>
    );
  }

  if (cart.length === 0) {
    return (
        <div className="cart-container empty-container">
        <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
      >
        <Button type="primary"><Link to="/product">Create Now</Link></Button>
      </Empty>
      </div>
    );
}

  return (
    <div className="cart-container">
    <div className="cart-actions">
      <button onClick={clearCart}>Clear Cart</button>
      <button onClick={handleCreateOrder}>Create Order</button>
    </div>
    <div className="product-list">
      {cart.map((product, index) => (
        <div className="product-card" key={index}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  </div>
);
};

export default Cart;
