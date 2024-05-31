import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import { UserProvider } from './contex/UserContex/UserState'
import { ProductProvider } from './contex/ProductContext/ProductState'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
function App() {


  return (

    <UserProvider>
      <ProductProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/product' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </UserProvider>
  )

}

export default App
