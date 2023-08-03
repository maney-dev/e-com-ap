import '@/styles/globals.css'
import { CartProvider } from '../../ctx/cartContext'
import { AuthProvider } from '../../ctx/authContext'


export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <AuthProvider>

        <Component {...pageProps} />

      </AuthProvider>
    </CartProvider>
    
  )
}
