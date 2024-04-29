import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ApplePay from '../images/apple-pay.png'
import GooglePay from '../images/google-pay.png'
import LiqPay from '../images/liq-pay.png'
import CheckoutItem from '../components/CheckoutItem'

const Checkout = () => {
  const [checkoutSum, setCheckoutSum] = useState(0)

  const location = useLocation()
  const items = location.state ? location.state.items : null

  const sum = items.reduce((acc, curr) => acc + curr.price * curr.count, 0)

  useEffect(() => {
    setCheckoutSum(sum)
  }, [sum])

  return (
    <section className="checkout-section">
      <div className='form-wrapper'>
        <div className='express-checkout'>
          <h3>Express Checkout</h3>
          <div className='pay-button-wrapper'>
            <div className='pay-button'> <img src={LiqPay} alt='pay' /> </div>
            <div className='pay-button'> <img src={GooglePay} alt='pay' /> <span className='google-pay'>Pay</span></div>
            <div className='pay-button'> <img src={ApplePay} alt='pay' /> <span className='apple-pay'>Pay</span></div>
          </div>
          <h3>Or</h3>
        </div>

        <form>
          <div className='contact'>
            <h4>Contact</h4>
            <div className='contact-wrapper'>
              <input className='email' name='contact' type='email' placeholder='Email' />
              <input className='email-me' name='email-me' type='checkbox' />
              <label for='email-me'>Email me with news and offers</label>
            </div>
          </div>

          <div className='shipping-addres'>
            <h4>Shipping addres</h4>
            <div className='addres-wrapper'>
              <input className='input-item' type='text' placeholder='Country/Region' />
              <input className='input-item' type='text' placeholder='First name' />
              <input className='input-item' type='text' placeholder='Last name' />
              <input className='input-item' type='text' placeholder='Addresses' />
              <input className='input-item' type='text' placeholder='City' />
              <input className='input-item' type='text' placeholder='State' />
              <input className='input-item' type='number' placeholder='Zip code' />
              <input className='input-item' type='tel' placeholder='Phone' />
            </div>
          </div>

          <div className='shipping-method'>
            <h4>Shipping method</h4>
          </div>

          <div className='payment-method'>
            <h4>Payment method</h4>
            <p>Credit card</p>
            <div className='payment-wrapper'>
              <input className='input-item' type='tel' placeholder='Card number' />
              <input className='input-item' type='tel' placeholder='Expiration date (MM/YY)' />
              <input className='input-item' type='tel' placeholder='Secuirity code' />
              <input className='input-item' type='tel' placeholder='Name on card' />
            </div>
          </div>

          <button className='pay-now'>Pay now</button>

          <div className='links'>
            <a href='google.com'>Refund policy </a>
            <a href='google.com'>Privacy policy</a>
            <a href='google.com'>Terms of service</a>
          </div>
        </form>
      </div>

      <div className='total-wrapper'>
        <div className='total-cart'>

          {items.map(item => <CheckoutItem
            key={item.id}
            image={item.imageUrl}
            description={item.description}
            size={item.size}
            color={item.color}
            price={item.price}
            count={item.count}
          />
          )}

        </div>
        <div className='total-discount'>
          <input type='password' placeholder='Discount code or gift card' />
          <button className='apply'>Apply</button>
        </div>

        <div className='total-sum-wrapper'>
          <div className='total-sum'><span>Subtotal</span><b>${checkoutSum}</b></div>
          <div className='total-sum'><span>Shipping</span><b>Free</b></div>
          <div className='total-sum'><span>Total</span><b>${checkoutSum}</b></div>
        </div>
      </div>
    </section>
  )
}

export default Checkout