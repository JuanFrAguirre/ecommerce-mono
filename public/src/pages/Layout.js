import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div className="container mx-auto min-h-[80vh] py-6">{children}</div>

      <Footer />
    </>
  )
}

export default Layout
