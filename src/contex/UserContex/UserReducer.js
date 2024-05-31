import products from "../ProductContext/ProductReducer";

const users = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          token: action.payload.token,
        };
        case "GET_USER_INFO":
          return {
            ...state,
            user: action.payload.user,
            orders: action.payload.Orders,
            products: action.payload.Products
          };
          case "LOGOUT":
            return {
              ...state,
              token:"",
              user: null
            };
            default:
              return state;
          }
     };
     



 export default users;