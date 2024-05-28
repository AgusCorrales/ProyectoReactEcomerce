import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'

function App() {


  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/> 
      <Route path='/register' element={<Register/>}/> 
      <Route path='/profile' element={<Profile/>}/> 
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
   
}

export default App
