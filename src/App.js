import './App.css'
import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import Header from './components/header/Header'
import Home from './routes/Home'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import ProductReview from './routes/ProductReview'
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/Checkout'

// Scrolling to top every time path changing 
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div className='app'>
      <Header onSearch={handleSearch} />
      <ScrollToTop />
      <Routes>
        <Route path='/online-store/' exact element={<Home />} />
        <Route path='/list' element={<Main searchQuery={searchQuery} />} />
        <Route path='/product-review/:id' element={<ProductReview />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;