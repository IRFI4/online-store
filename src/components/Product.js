import React, { useState, useEffect } from 'react'
import Icon from './Icon';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import TopSellers from './TopSellers';
import Image from './Image';

const Product = () => {
  const [choosedSize, setChoosedSize] = useState(8)

  const location = useLocation()
  const product = location.state ? location.state.product : null

  // Posting product into the cart
  const addToCart = (obj) => {
    obj.count = 1
    axios.post('https://6609ac0e0f324a9a28839d4e.mockapi.io/product-list/shoes/cart', obj)
  }

  useEffect(() => {
    product.size = choosedSize
  }, [choosedSize, product])

  if (!product) {
    return <div>Page not found</div>;
  }

  return (
    <div className='product-wrapper'>
      <div className='product'>
        <div className='product-images'>
          <div className='secondary-images'>
            {/* <img src={require(`../images/${product.imageUrl[1]}.png`)} alt='sneakers' /> */}
            {/* <img src={require(`../images/${product.imageUrl[2]}.png`)} alt='sneakers' /> */}
            {/* <img src={require(`../images/${product.imageUrl[3]}.png`)} alt='sneakers' /> */}
            <Image url={`/products/${product.imageUrl[1]}.png`} alt={'sneakers'} />
            <Image url={`/products/${product.imageUrl[2]}.png`} alt={'sneakers'} />
            <Image url={`/products/${product.imageUrl[3]}.png`} alt={'sneakers'} />
          </div>
          <div className='primary-image'>
            {/* {product.brand && <div className='product-brand'><img src={require(`../images/${product.brand}.png`)} alt={product.brand} /></div>} */}
            {product.brand && <div className='product-brand'>
              <Image url={`/brands/${product.brand}.png`} alt={'sneakers'} />
            </div>}
            {/* <img src={require(`../images/${product.imageUrl[0]}.png`)} alt='sneakers' /> */}

            <Image url={`/products/${product.imageUrl[0]}.png`} alt={'sneakers'} />
          </div>
        </div>

        <div className='product-description'>
          <h3 className='product-titile'>{product.description}</h3>
          <span className='product-price'>${product.price}.00</span>
          <div className='size-guide'>
            <p>Choose size in stock</p>
            <div>
              <a
                target='_blank'
                rel="noreferrer"
                href='https://www.google.com/search?q=UK+Size+Guide'>UK Size Guide
              </a>
            </div>
          </div>

          <div className='product-size'>
            <ul>
              {product.sizes.map(size =>
                <li><input
                  key={size}
                  onChange={() => setChoosedSize(size)}
                  checked={choosedSize === size}
                  type='radio'
                  name='size'
                  id={size}
                  value={size}>
                </input><label htmlFor={size}>{size}</label></li>)}
            </ul>
          </div>

          <div className='product-buttons'>
            <button onClick={() => addToCart(product)} className='buy-button'>Buy</button>
            <Icon id='heart' className='heart' />
          </div>
          <div className='characteristics'>Characteristics</div>
          <div className='technologies'>Technologies</div>
          <div className='reviews'>Reviews</div>
        </div>
      </div>

      <TopSellers title={'You may also like'} />

      <div className='btn-wrapper'>
        <Link to={'/list'}>
          <button className='back-to-shopping'><Icon id='white-line' className='btn-line' />Back to shopping</button>
        </Link>
      </div>

    </div>
  )
}

export default Product