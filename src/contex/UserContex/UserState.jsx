import axios from "axios";
import { createContext, useReducer } from 'react';
import UserReducer from "./UserReducer";


const token = localStorage.getItem("token") || "";

const initialState = {
    token: token,
    user: null,
};

const API_URL = "http://localhost:3001/"

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
    
    const register = async (user) => {
        try {
          const res = await axios.post(API_URL + 'users', user);
          console.log('User created:', res.data);
        } catch (error) {
          console.error('Error creating user:', error);
        }
      }; 
   
    const login = async (user) => {
        try {
            const res = await axios.post(API_URL + "users/login", user);
            dispatch({
                type: "LOGIN",
                payload: res.data,
            });
            if (res.data) {
                console.log(user);
                localStorage.setItem('User', JSON.stringify(res.data.user))
                localStorage.setItem("token", res.data.token);
                
            }
        } catch (error) {
            console.error(error);
        }
    };
    const getLoggedUserInfo = async () => {
        let token = localStorage.getItem("token");
        try {
          const res = await axios.get(API_URL + "users/info", {
            headers: {
              Authorization: token,
            },
          });
          dispatch({
            type:"GET_USER_INFO",
            payload:res.data
            
          })
        } catch (error) {
          console.error(error);
        }
      };
      const logout = async()=>{
        try {
            const token = localStorage.getItem("token")
            const res = await axios.delete(API_URL + "users/logout",{
                headers:{
                    Authorization:token
                }
            })
            if(res.data){
                localStorage.removeItem("token")
                localStorage.removeItem("User")
                dispatch({
                    type:"LOGOUT"
                })
            }
    
        } catch (error) {
            console.error(error);
        }
      }
    return (
        <UserContext.Provider 
            value={{
                token: state.token,
                user: state.user,
                register,
                login,
                getLoggedUserInfo,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
};



