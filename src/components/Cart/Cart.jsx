import React, { useContext, useState } from 'react';
import { ProductContext } from '../../contex/ProductContext/ProductState';
import { Button, Empty, Result } from 'antd';
import { Link } from 'react-router-dom';
import orderService from '../../service/OrderServices';

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
    );
  }

  if (cart.length === 0) {
    return (
        <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
      >
        <Button type="primary"><Link to="/product">Create Now</Link></Button>
      </Empty>
    );
}

  return (
    <div>
      <button onClick={clearCart}>Clear Cart</button>
      <button onClick={handleCreateOrder}>Create Order</button>
      {cart.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
