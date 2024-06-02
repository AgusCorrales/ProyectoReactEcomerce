import React, { useContext } from 'react'
import { ProductContext } from '../../contex/ProductContext/ProductState'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './Product.scss';

const Product = () => {
    const {products, addCart} = useContext(ProductContext)
    if(products.length == 0) {
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
  return (
    <div className="product-container">
    {products.map((product) => {
      return (
        <div className="product-card" key={product.id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button className='button' onClick={() => addCart(product)}>Add to cart</button>
        </div>
      );
    })}
  </div>
);
};


export default Product