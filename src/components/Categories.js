import React from 'react'
import tShitrs from '../images/t-shirts.jpg'
import fitnessTrackers from '../images/fitness-trackers.jpg'
import sportsTops from '../images/sports-tops.jpg'
import caremats from '../images/caremats.jpg'
import termobile from '../images/termobile.jpg'
import shoes from '../images/shoes.jpg'

const Categories = () => {
  return (
    <section className='categories-section'>
        <div className='categories-wrapper'>
          <div className='categories-item'><img src={tShitrs} alt='T-shirts' /><p>T-shirts</p></div>
          <div className='categories-item'><img src={fitnessTrackers} alt='Fitness trackers' /><p>Fitness trackers</p></div>
          <div className='categories-item'><img src={sportsTops} alt='Sports tops' /><p>Sports tops</p></div>
          <div className='categories-item'><img src={caremats} alt='Caremats' /><p>Caremats</p></div>
          <div className='categories-item'><img src={termobile} alt='Termobile' /><p>Termobile</p></div>
          <div className='categories-item'><img src={shoes} alt='Shoes' /><p>Shoes</p></div>
        </div>
    </section>
  )
}

export default Categories