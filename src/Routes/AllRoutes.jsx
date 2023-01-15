import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Product from './Product'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path= "/" element ={<Product />}/>
        <Route path= "/cart" element ={<Cart />}/>
    </Routes>
  )
}

export default AllRoutes