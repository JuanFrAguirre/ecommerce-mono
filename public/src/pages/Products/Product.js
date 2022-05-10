import React from 'react'

const Product = ({ product }) => {
  return (
    <div className="flex justify-between p-4 rounded-lg shadow bg-stone-100">
      <div className="flex flex-col justify-center gap-2">
        <p className="text-xl font-semibold text-teal-500">{product.brand}</p>
        <p className="text-2xl font-bold">{product.description}</p>
        <p className="text-xl font-light">$ {product.price}</p>
      </div>
      <div className="max-w-[50%] border p-1 rounded-lg bg-white">
        <img
          src={product.img}
          alt={product.description}
          className="object-cover h-64 rounded-lg"
        />
      </div>
    </div>
  )
}

export default Product
