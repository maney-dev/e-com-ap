import React from 'react'
import ProductItem from './ProductItem'

const FeaturedProduct = ({products}) => {
  return (
    <div>
      <div>
        <h2>Featured Products</h2>
        <div className='grid grid-cols-3 gap-16'>
            {products?.map((product) =>(
                <ProductItem key={product._id} product={product}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProduct

