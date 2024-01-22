import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import TopSellers from './components/TopSellers'
import Slider from './components/Slider'
import Brands from './components/Brands'
import Explore from './components/Explore'
import Footer from './components/Footer'
// import Cart from './components/Cart'
// import Checkout from './components/Checkout'
// import Product from './components/Product'
// import Main from './components/Main'

function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Categories />
      <TopSellers />
      <Slider />
      <Brands />
      <Explore />
      {/* <Cart /> */}
      {/* <Checkout /> */}
      {/* <Product /> */}
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;