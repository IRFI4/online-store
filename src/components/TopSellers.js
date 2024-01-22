import React from 'react'
import sneakers1 from '../images/product-sneakers1.png'
import sneakers2 from '../images/product-sneakers2.png'
import sneakers3 from '../images/product-sneakers3.png'
import sneakers4 from '../images/product-sneakers4.png'
import Icon from "../sprite/Icon"


const TopSellers = () => {
  return (
    <section className='top-sellers-section'>
      <div className='top-sellers-wrapper'>
        <h2>Top sellers</h2>
        <div className='top-sellers-switcher'>
          <input type='radio' name='switcher' id='boots' value='boots'/><label for='boots'>boots</label>
          <input type='radio' name='switcher' id='jakets' value='jakets'/><label for='jakets'>jakets</label>
          <input type='radio' name='switcher' id='leggings' value='leggings'/><label for='leggings'>leggings</label>
          <input type='radio' name='switcher' id='windbreakers' value='windbreakers'/><label for='windbreakers'>windbreakers</label>
        </div>

        <div className='card-wrapper'>
          {/* <Icon id='arrow' className='card-slider'/> */}
          
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

          <div className='arrows'>
            <Icon id='arrow' className='card-slider'/>
            <Icon id='arrow' className='card-slider'/>
          </div>
          
        </div>
        
        <div className='slider-buttons'>
          <div className='slider-dot active'></div>
          <div className='slider-dot'></div>
        </div>
      </div>
    </section>
  )
}

export default TopSellers