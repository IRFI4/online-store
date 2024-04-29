import React, { useState, useEffect } from 'react'
import Card from "../components/Card"
import Slider from "react-slick"
import Heading from "../components/Heading"
import axios from 'axios'


const TopSellers = (props) => {
  const [sliderItems, setSliderItems] = useState([])

  useEffect(() => {
    axios.get('https://6609ac0e0f324a9a28839d4e.mockapi.io/product-list/shoes/products').then(res => {
      res.data.length = 8
      setSliderItems(res.data)
    })
  }, [])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const [category, setCategory] = useState('boots')

  return (

    <section className='top-sellers-section'>
      <div className='top-sellers-wrapper'>

        <Heading title={props.title} />

        <div className='top-sellers-switcher'>
          <input onChange={() => setCategory('boots')} checked={category === 'boots'} type='radio' name='category' id='boots' value='boots' /><label htmlFor='boots'>boots</label>
          <input onChange={() => setCategory('jakets')} checked={category === 'jakets'} type='radio' name='category' id='jakets' value='jakets' /><label htmlFor='jakets'>jakets</label>
          <input onChange={() => setCategory('leggings')} checked={category === 'leggings'} type='radio' name='category' id='leggings' value='leggings' /><label htmlFor='leggings'>leggings</label>
          <input onChange={() => setCategory('windbreakers')} checked={category === 'windbreakers'} type='radio' name='category' id='windbreakers' value='windbreakers' /><label htmlFor='windbreakers'>windbreakers</label>
        </div>

        <div>
          <Slider {...settings}>
            {sliderItems.map(obj => <Card
              key={obj.id}
              id={obj.id}
              object={obj}
              image={obj.imageUrl}
              brand={obj.brand}
              label={obj.label}
              discount={obj.discount}
              description={obj.description}
              price={obj.price}
              sizes={obj.sizes}
            />)}
          </Slider>
        </div>

      </div>
    </section>
  )
}

export default TopSellers