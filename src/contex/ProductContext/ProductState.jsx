import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer.js"
import axios from "axios"

const cart = JSON.parse(localStorage.getItem("cart")) || []

const initialState = {
  products: [],
  cart: cart
};

const API_URL = "http://localhost:3001/";

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL + "products");
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
    return res;
  };

  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product
    })
  }

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART"
    })
  }
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addCart,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
