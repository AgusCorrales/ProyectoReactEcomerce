import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../contex/ProductContext/ProductState'
import Product from '../Product/Product'


const Products = () => {
    const {getProducts} = useContext(ProductContext)

    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div><Product/></div>
  )
}

export default Products