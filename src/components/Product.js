import React from 'react'
import Icon from '../sprite/Icon';
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product3 from '../images/product3.png'
import product4 from '../images/product4.png'
import sneakers1 from '../images/product-sneakers1.png'
import sneakers2 from '../images/product-sneakers2.png'
import sneakers3 from '../images/product-sneakers3.png'
import sneakers4 from '../images/product-sneakers4.png'

const Product = () => {
  return (
    <div className='product-wrapper'>
        <div className='product'>
          <div className='product-images'>
            <div className='secondary-images'>
              <img src={product2} alt='sneakers' />
              <img src={product3} alt='sneakers'/>
              <img src={product4} alt='sneakers' />
              <img src={product3} alt='sneakers' />
            </div>
            <div className='primary-image'>
              <img src={product1} alt='sneakers' />
            </div>
          </div>

          <div className='product-description'>
            <h3 className='product-titile'>Skechers women's casual sneakers</h3>
            <span className='product-price'>$89.00</span>
            <p>Choose size in stock</p>
            <div className='product-size'>
              <ul>
                <li>6</li>
                <li>6.5</li>
                <li>7</li>
                <li>7.5</li>
                <li>8</li>
                <li>8.5</li>
                <li>9</li>
                <li>9.5</li>
                <li>10</li>
                <li>10.5</li>
                <li>11</li>
                <li>11.5</li>
                <li>12</li>
              </ul>
            </div>

            <div className='product-buttons'>
              <button className='buy-button'>Buy</button>
                <Icon id='heart' className='heart'/>
            </div>
            <div className='characteristics'>Characteristics</div>
            <div className='technologies'>Technologies</div>
            <div className='reviews'>Reviews</div>
          </div>
        </div>

        <div className='recommendations'>
          <h2>You may also like</h2>
          <div className='top-sellers-switcher'>
            <input type='radio' name='switcher' id='boots' value='boots'/><label for='boots'>boots</label>
            <input type='radio' name='switcher' id='jakets' value='jakets'/><label for='jakets'>jakets</label>
            <input type='radio' name='switcher' id='leggings' value='leggings'/><label for='leggings'>leggings</label>
            <input type='radio' name='switcher' id='windbreakers' value='windbreakers'/><label for='windbreakers'>windbreakers</label>
          </div>
          <div className='card-wrapper'>
            <Icon id='arrow' className='card-slider'/>
            
            <div className='card'>
              <img  className='card-image' src={sneakers1} alt='sneakers' />
              <div className='card-description'>
                <div className='lables'>
                  <span className='new-arrival-label'>New arrival</span>
                  <span className='sale-label'>-20%</span>
                </div>
                <p>Women's running shoes Nike QUEST</p>
                <span className='card-price'>$150</span>
              </div>
            </div>

            <div className='card'>
              <img src={sneakers2} alt='sneakers' />
              <div className='card-description'>
                <div className='lables'>
                  <span className='new-arrival-label'>New arrival</span>
                </div>
                <p>Women’s running shoes Asics gel-trabuco 11 GTX</p>
                <span className='card-price'>$188</span>
              </div>
            </div>

            <div className='card'>
              <img src={sneakers3} alt='sneakers' />
              <div className='card-description'>
                <div className='lables'>
                  <span className='new-arrival-label'>New arrival</span>
                  <span className='sale-label'>-20%</span>
                </div>
                <p>Women's running shoes Asics DYNABLAST</p>
                <span className='card-price'>$124</span>
              </div>
            </div>

            <div className='card'>
              <img src={sneakers4} alt='sneakers' />
              <div className='card-description'>
                <div className='lables'>
                  <span className='new-arrival-label'>New arrival</span>
                </div>
                <p>New Balance 411 V3 W411CK3 Women's Running Shoes</p>
                <span className='card-price'>$96</span>
              </div>
            </div>

            <Icon id='arrow' className='card-slider'/>
          </div>
        </div>

        <div className='btn-wrapper'>
          <button className='back-to-shopping'><Icon id='white-line' className='btn-line' />Back to shopping</button>
        </div>

      </div>
  )
}

export default Product