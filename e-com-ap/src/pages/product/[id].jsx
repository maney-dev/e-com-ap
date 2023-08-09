import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiFillShopping } from 'react-icons/ai'
import Layout from '../../../components/Layout'


const ProductDetails= ({product}) => {
    const [quantity, setQuantity] = useState(1)

    const addQuantity = (command) => {

    }
  return (
    <>
      <Layout>
            <div>
                {/* left */}
                <div>
                    <Image src={product?.image} width={500} height={1250} alt="product image"/>
                    {/* {product.map(product => <div>{product.name}</div>)} */}
                </div>
                {/* right */}
                <div>
                    <h2>productname</h2>
                    <span>Category: <span>actual category</span></span>
                    <p>desc</p>
                    <div>
                        <span>-</span>
                        <span>{quantity}</span>
                        <span>+</span>
                    </div>
                    <span>$123</span>
                    <button>Add to Cart <AiFillShopping/></button>
                </div>
            </div>
      </Layout>
    </>
  )
}

export default ProductDetails

export async function getServerSideProps(ctx){
    const id = ctx.params.id

    const {data: product} = await axios.get(`http://localhost:3000/api/products/${id}`)

    return {
        props: {
            product
        }
    }
}
