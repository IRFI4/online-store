import React from 'react'
import nike from '../images/brand-nike.png'
import theNorthFace from '../images/brand-the-north-face.png'
import skechers from '../images/brand-skechers.png'
import adidas from '../images/brand-adidas.png'
import timberland from '../images/brand-timberland.png'
import asics from '../images/brand-asics.png'
import Heading from "../components/Heading"

const Brands = () => {
  return (
    <section className='brands-section'>
      <Heading title={'Brand you love'} />
      <div className='brands-wrapper'>
        <img src={nike} alt='nike-brand' />
        <img src={theNorthFace} alt='the-north-face-brand' />
        <img src={skechers} alt='skechers-brand' />
        <img src={adidas} alt='adidas-brand' />
        <img src={timberland} alt='timberland-brand' />
        <img src={asics} alt='asics-brand' />
      </div>
    </section>
  )
}

export default Brands