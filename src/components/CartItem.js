import React, { useState } from 'react'
import Icon from '../sprite/Icon';

const CartItem = (props) => {

    const [itemCount, setItemCount] = useState(1)

    // Counter for cart item
    const increaseItemCount = () => {
        setItemCount(itemCount + 1)
        props.updateTotalSum(props.id, props.price, itemCount + 1)
    }
    const decreaseItemCount = () => {
        if (itemCount > 1) {
            setItemCount(itemCount - 1)
            props.updateTotalSum(props.id, props.price, itemCount - 1)
        }
    }

    // Removing item from cart
    const handleClick = () => {
        props.removeItem(props.id)
    }

    return (
        <div className='cart-item'>
            <div className='item-img'>
                <img src={require(`../images/${props.image[0]}.png`)} alt='#' />
            </div>
            <div className='item-description'>
                <div className='item-title'>
                    <p>{props.description}</p>
                </div>
                <div className='item-params'>
                    <span>Size: {props.size}</span>
                    <span>Color: {props.color}</span>
                </div>
            </div>
            <div className='item-counter'>
                <button onClick={() => decreaseItemCount()}>-</button>
                <div>{itemCount}</div>
                <button onClick={() => increaseItemCount()}>+</button>
            </div>
            <div className='item-trash'>
                <div className='item-price'>
                    <b>${props.price * itemCount}</b>
                </div>
                <div onClick={handleClick} className='item-remove'>
                    <Icon id='remove' className='remove-icon' />
                    <span>Remove</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem