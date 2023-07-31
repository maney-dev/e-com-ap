import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductItem = (product) => {
  return (
    <Link href={`product/${product._id}`}>
      <div>
        <div>
          <Image src={product.image} width='500' height='500'/>
        </div>
        <div>
          <h3>{product.name}</h3>
          <span>{product.category}</span>
          <span>{product.price}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
