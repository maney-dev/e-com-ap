import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useCartContext } from '../ctx/cartContext'
// import StripeCheckout from 'react-stripe-checkout';


const Cart = () => {
  const {cartItems, removeCartItem} = useCartContext()
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
 
  

  const handleCheckout = async() => {

     const lineItems = cartItems.map((item) => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name
          },
          unit_amount: item.price * 100 // parce que stripe interprète le prix en centimes
        },
        quantity: item.quantity
      }
     })

     const {data} = await axios.post('http://localhost:3000/api/checkout', {lineItems})

     const stripe = await stripePromise

     await stripe.redirectToCheckout({sessionId: data.id})
  }

  return (
    <div className="min-w-[275px] h-full px-3 py-6 bg-white text-[#333] rounded-lg shadow-lg cursor-pointer">
      <div>
        <h2 className="text-center text-2xl">Articles du panier</h2>
        <div className="max-h-[225px] overflow-auto flex flex-col gap-8 my-8">
          {cartItems?.length > 0 ? (
            cartItems?.map((item) => (
              <div key={item._id} className='flex items-center gap-8'>
                <div>
                  <Image width='75' height='75' src={item.image} alt="" />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <span>{item.quantity} X ${item.price}</span>
                </div>
                <AiOutlineClose size={20} onClick={() => removeCartItem(item)}/>
              </div>
            ))
          ) : <span className="text-red-500 ml-2">Le panier est vide!</span>}
        </div>
        <span className="inline-block">Total: <span>${cartItems.reduce((a, b) => a + b.price * b.quantity, 0)}</span></span>
        {/* <StripeCheckout name='SenShop'
        image='https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png'
        billingAddress
        shippingAddress
        description='Your total is $20'
        amount={2000}
        token={handleCheckout}
        stripeKey='NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY'
        > */}
        <span className="block max-w-max mt-8 px-6 py-1 bg-orange-500 text-[#efefef] rounded-lg" onClick={handleCheckout}>
          Checkout
        </span>
        {/* </StripeCheckout> */}
      </div>
    </div>
  )
}

export default Cart