import React from 'react'
import Image from '../Image'

const Categories = () => {
  return (
    <section className='categories-section'>
      <div className='categories-wrapper'>
        <div className='categories-item'>
          <Image url={'/assets/t-shirts.jpg'} alt={'t-shirts'} />
          <p>T-shirts</p>
        </div>
        <div className='categories-item'>
          <Image url={'/assets/fitness-trackers.jpg'} alt={'fitness-trackers'} />
          <p>Fitness trackers</p>
        </div>
        <div className='categories-item'>
          <Image url={'/assets/sports-tops.jpg'} alt={'sports-tops'} />
          <p>Sports tops</p>
        </div>
        <div className='categories-item'>
          <Image url={'/assets/caremats.jpg'} alt={'caremats'} />
          <p>Caremats</p>
        </div>
        <div className='categories-item'>
          <Image url={'/assets/termobile.jpg'} alt={'termobile'} />
          <p>Termobile</p>
        </div>
        <div className='categories-item'>
          <Image url={'/assets/shoes.jpg'} alt={'shoes'} />
          <p>Shoes</p>
        </div>
      </div>
    </section>
  )
}

export default Categories