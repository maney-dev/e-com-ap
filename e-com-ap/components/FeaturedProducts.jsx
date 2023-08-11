import React from 'react'
import ProductItem from './ProductItem'

const FeaturedProducts = ({ products }) => {

  // useEffect(() => {
  //   const getProd = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/api/products');
  //       console.log(response);
  //       const myProd = response.data;
  //       getProd(myProd);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   };
  //   getProd(products)
  // }, [])

  return (
    <div className='h-full w-full flex justify-center mt-[20rem] '>
      <div className='h-full w-10/12 mx-auto'>
        <h2 className='mb-8 text-3xl text-[#333]'>Produits populaires</h2>
        <div className="grid grid-cols-3 gap-16">
           {products?.map((product) => (
            <ProductItem key={product._id} product={product}/>
           ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts





