import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-teal-700 sticky top-0">
      <div className="container flex flex-1 justify-between items-center mx-auto">
        <Link to={'/home'}>
          <p className="text-3xl text-white font-bold">MyEcommerce</p>
        </Link>
        <nav className="flex gap-4">
          <Link className="header-navbar-link" to={'/home'}>
            Home
          </Link>
          <Link className="header-navbar-link" to={'/products'}>
            Products
          </Link>
          <Link className="header-navbar-link" to={'/contact'}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
