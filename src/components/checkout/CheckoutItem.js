import React from 'react'
import Image from '../Image'

const CheckoutItem = (props) => {
    return (
        <div className='total-cart-item'>
            <div className='total-cart-img'>
                <div className='total-cart-count'>{props.count}</div>
                <Image url={`/products/${props.image[0]}.jpg`} alt={'text'} />
            </div>
            <div className='total-cart-description'>
                <div className='total-cart-title'>
                    <p>{props.description}</p>
                </div>
                <div className='total-cart-params'>
                    <span>Size: {props.size}</span>
                    <span>Color: {props.color}</span>
                </div>
            </div>
            <div className='total-cart-price'>
                <b>${props.price * props.count}</b>
            </div>
        </div>
    )
}

export default CheckoutItem