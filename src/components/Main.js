import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import Filter from './Filter'
import Icon from '../sprite/Icon'

const Main = ({ searchQuery }) => {
  const [items, setItems] = useState([])
  // const [filters, setFilters] = useState({
  //   sizes: [],
  //   colors: [],
  //   brands: [],
  //   minPrice: 0,
  //   maxPrice: 1000,
  // })

  // Fetching data from products
  useEffect(() => {
    axios.get('https://6609ac0e0f324a9a28839d4e.mockapi.io/product-list/shoes/products').then(res => {
      setItems(res.data)
    })
  }, [])

  // const filteredProducts = items.filter(product => {
  //   const sizeMatch = (filters.sizes && filters.sizes.length === 0) || filters.sizes.includes(product.size)
  //   const colorMatch = (filters.colors && filters.colors.length === 0) || filters.colors.includes(product.color)
  //   const brandMatch = (filters.brands && filters.brands.length === 0) || filters.brands.includes(product.brand)
  //   const priceMatch = product.price >= filters.minPrice && product.price <= filters.maxPrice

  //   return sizeMatch && colorMatch && brandMatch && priceMatch
  // })

  // const handleFilterChange = (filterType, value, boolean) => {
  //   console.log({ [filterType]: value })
  //   setFilters(prevFilters => ({

  //     ...prevFilters,
  //     [filterType]: value
  //   }))
  //   console.log(filters)
  // }

  return (
    <div className='main-content'>
      {/* <Filter onFilterChange={handleFilterChange} /> */}
      <Filter />
      <main>
        {/* {filteredProducts.map(obj => <Card */}
        {items.filter((item) => item.description.toLowerCase().includes(searchQuery.toLowerCase())).map(obj => <Card
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

        <div className='pagination'>
          <div className='page'>
            <Icon id='paginate-arrow' className='paginate-arrow prev' />
          </div>
          <div className='page active'>1</div>
          <div className='page'>2</div>
          <div className='page'>3</div>
          <div className='page'>4</div>
          <div className='page'>5</div>
          <div className='page'>6</div>
          <div className='page'>
            <Icon id='paginate-arrow' className='paginate-arrow next' />
          </div>
        </div>

      </main>

    </div>
  )
}

export default Main