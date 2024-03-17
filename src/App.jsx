/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './shared/Navbar'
import Home from './pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './pages/ProtectedRoute'
import Footer from './shared/Footer'
import EmailVerifiction from './pages/EmailVerifiction'
import Addfood from './pages/admin/AddFood'
import Menu from './pages/Menu'
import FoodPage from './pages/FoodPage'
import Profile from './pages/Profile'
import ViewCart from './pages/ViewCart'
import TodaySelction from './pages/TodaySelction'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import Order from './pages/Order'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import MyOrder from './pages/MyOrder'
import AllOrder from './pages/admin/AllOrder'



function App() {
  
  const [count, setCount] = useState(0)
  const stripePromise = loadStripe('pk_test_51OtVSrRoo6CGjFVx4SPG1LgjxldvQkctypNfKbBM8GFLrsuDHHdz0aWUqV03sSzpfzkPnagKe5wfMzLWg0tpONiN00CNSVmtw9');

  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/verifyOtp' element={<ProtectedRoute>
          <EmailVerifiction />
        </ProtectedRoute>} />
        <Route path='/addfood' element={<ProtectedRoute>
          <Addfood />
        </ProtectedRoute>} />
        <Route path='/menu' element={<ProtectedRoute>
          <Menu />
        </ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute>
          <Profile />
        </ProtectedRoute>} />
        <Route path='/menu/:id' element={<ProtectedRoute>
          <FoodPage />
        </ProtectedRoute>} />
        <Route path='/viewcart' element={<ProtectedRoute>
          <ViewCart />
        </ProtectedRoute>} />
        <Route path='/success' element={<ProtectedRoute>
          <Success />
        </ProtectedRoute>} />
        <Route path='/cancel' element={<ProtectedRoute>
          <Cancel />
        </ProtectedRoute>} />
        <Route path='/myOrder' element={<ProtectedRoute>
          <MyOrder />
        </ProtectedRoute>} />
        <Route path='/allOrders' element={<ProtectedRoute>
          <AllOrder />
        </ProtectedRoute>} />
        <Route path='/order' element={<ProtectedRoute>
          <Elements stripe={stripePromise}>
          <Order />
          </Elements>
        </ProtectedRoute>} />
        <Route path='/todaySelction' element={<ProtectedRoute>
          <TodaySelction />
        </ProtectedRoute>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
