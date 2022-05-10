import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from '../pages/404'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Products from '../pages/Products/Products'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Router
