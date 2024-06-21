import React from 'react'
import Heading from "./Heading"
import Image from './Image'

const Brands = () => {
  return (
    <section className='brands-section'>
      <Heading title={'Brand you love'} />
      <div className='brands-wrapper'>
        <Image url={'/brands/brand-nike.png'} alt={'nike-brand'} />
        <Image url={'/brands/brand-the-north-face.png'} alt={'the-north-face-brand'} />
        <Image url={'/brands/brand-skechers.png'} alt={'skechers-brand'} />
        <Image url={'/brands/brand-adidas.png'} alt={'adidas-brand'} />
        <Image url={'/brands/brand-timberland.png'} alt={'timberland-brand'} />
        <Image url={'/brands/brand-asics.png'} alt={'asics-brand'} />
      </div>
    </section>
  )
}

export default Brands