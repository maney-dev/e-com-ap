import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
// const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = "pk_test_51NaipUGowRBtRquibQkBIEGmG6Q0hCLAO7XoHyD4zSIIW6NooDXGVdj6u3ELrN8p8rB8O0g6qn5YVRFOhcpsRwNy00CNYukLgR"
export default async function handler(req, res){
    if(req.method === 'POST'){
        try {
            const session = await stripe.checkout.sessions.create({
                line_items: req.body.lineItems,
                mode: 'payment',
                payment_method_types: ['card'],
                success_url: 'http://loclhost:3000/success',
                cancel_url: 'http://localhost:3000'
            })

            return res.status(201).json(session)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}