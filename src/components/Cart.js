import React from 'react'
import Icon from '../sprite/Icon';
import product1 from '../images/product1.png'

const Cart = () => {
  return (
    <div className='cart-wrapper'>
        <div className='cart'>
          <h3>Cart</h3>
          <div className='cart-content'>
            <div className='cart-list'>

              <div className='cart-item'>
                <div className='item-img'>
                  <img src={product1} alt='#'/>
                </div>
                <div className='item-description'>
                  <div className='item-title'>
                    <p>Skechers women's casual sneakers</p>
                  </div>
                  <div className='item-params'>
                    <span>Size: 40.5</span>
                    <span>Color: Black</span>
                  </div>
                </div>
                <div className='item-counter'>
                  <button>-</button>
                  <input type='number'/>
                  <button>+</button>
                </div>
                <div className='item-trash'>
                  <div className='item-price'>
                    <b>$96</b>
                  </div>
                  <div className='item-remove'>
                    <Icon id='remove' className='remove-icon' />
                    <span>Remove</span>
                  </div>
                </div>
              </div>

              <div className='cart-item'>
                <div className='item-img'>
                  <img src={product1} alt='#'/>
                </div>
                <div className='item-description'>
                  <div className='item-title'>
                    <p>Skechers women's casual sneakers</p>
                  </div>
                  <div className='item-params'>
                    <span>Size: 40.5</span>
                    <span>Color: Black</span>
                  </div>
                </div>
                <div className='item-counter'>
                  <button>-</button>
                  <input type='number'/>
                  <button>+</button>
                </div>
                <div className='item-trash'>
                  <div className='item-price'>
                    <b>$96</b>
                  </div>
                  <div className='item-remove'>
                    <Icon id='remove' className='remove-icon' />
                    <span>Remove</span>
                  </div>
                </div>
              </div>

            </div>
            <div className='cart-total'>
              <div className='total-price'>
                <span>Total:</span><b>$192</b>
              </div>
              <button>Buy</button>
            </div>
          </div>
        </div> 
      </div>
  )
}

export default Cart