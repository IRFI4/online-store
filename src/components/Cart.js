import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from '../components/CartItem'
import axios from 'axios'
import Icon from './Icon'

const Cart = () => {
  const [items, setItems] = useState([])
  const [totalSum, setTotalSum] = useState(0)

  // Fetching data from cart
  useEffect(() => {
    axios.get('https://6609ac0e0f324a9a28839d4e.mockapi.io/product-list/shoes/cart')
      .then(res => {
        setItems(res.data)
        calculateTotalSum(res.data)
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  // Calculating total sum
  const calculateTotalSum = (items) => {
    if (items.length) {
      const sum = items.reduce((acc, curr) => acc + curr.price, 0)
      setTotalSum(sum)
    } else {
      setTotalSum(0)
    }
  }

  const updateTotalSum = (itemId, itemPrice, itemCount) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, count: itemCount }
      }
      return item
    })

    const sum = updatedItems.reduce((acc, item) => acc + item.price * (item.count || 1), 0)
    setTotalSum(sum)
    setItems(updatedItems)
  }

  // Deleting data from cart
  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId)
    setItems(updatedItems)
    axios.delete(`https://6609ac0e0f324a9a28839d4e.mockapi.io/product-list/shoes/cart/${itemId}`)
      .then(() => {
        const removedItem = items.find((item) => item.id === itemId)
        const sum = totalSum - removedItem.price * removedItem.count
        setTotalSum(sum)
      })
  }

  // Returns user to the previous page
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  return (
    <>
      <div className='cart-return-block'>
        <div onClick={goBack} className='arrow-block'><Icon id='bold-arrow' className='cart-arrow' /><p>Return to shopping</p></div>
        <div onClick={goBack} className='cross-block'><Icon id='cross' className='cart-close' /></div>
      </div>
      <div className='cart-wrapper'>
        <div className='cart'>
          <h3>Cart</h3>
          <div className='cart-content'>
            <div className='cart-list'>

              {items.map((obj) => <CartItem
                key={obj.id}
                id={obj.id}
                image={obj.imageUrl}
                description={obj.description}
                price={obj.price}
                obj={obj}
                removeItem={removeItem}
                size={obj.size}
                color={obj.color}
                updateTotalSum={updateTotalSum}
              />)}

            </div>
            <div className='cart-total'>
              <div className='total-price'>
                <span>Total:</span><b>${totalSum}</b>
              </div>
              <button onClick={() => navigate('/checkout', { state: { items } })}>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart