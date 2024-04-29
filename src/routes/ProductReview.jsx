import React from 'react'
import Product from '../components/Product'

const ProductReview = (props) => {
  return (
    <Product
      title={props.title}
      price={props.price}
      imageUrl={props.imageUrl}
    />
  )
}

export default ProductReview