import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    let data = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`)
    setProducts(data.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <p>Products</p>
      <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        {products
          ? products.map((product) => (
              <Product product={product} key={product.id} />
            ))
          : ''}
      </div>
    </div>
  )
}

export default Products
