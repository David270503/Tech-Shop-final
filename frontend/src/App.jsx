import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/Home'
import { useCart } from './hooks/useCart'
import Contact from './components/Contact'
import Products from './components/Products'
import Orders from './components/Orders'
import OrderConfirmation from './components/OrderConfirmation '

function App() {
  const [products, setProducts] = useState([])
  const {cart, addToCart, removeFromCart, updateQuantity, confirmOrder} = useCart()

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Erreur API : ', err))
  }, [])

  return (
    <>
      <Header count={cart.length} />

      <main>
        <Routes>
          <Route path='/' element={
            <ProductList products={products} onAddToCart={addToCart} />
          } />
          <Route path='/produits' element={<Products products={products} onAddToCart={addToCart}/>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/panier' element={
            <Cart items={cart} onRemove={removeFromCart} onUpdateQuantity={updateQuantity}/>
          } />
          <Route path='/commande' element={<Orders items={cart} confirmOrder={confirmOrder}/>}/>
          <Route path='/confirmation-commande' element={<OrderConfirmation />}/>
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App