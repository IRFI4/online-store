import Icon from "../sprite/Icon"
import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"

const Header = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const { pathname } = useLocation()

  const hideHeader = pathname === '/cart' || pathname === '/checkout'

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = () => {
    props.onSearch(searchTerm)
    navigate('/list')
    setSearchTerm('')
  }

  return (
    <header className='header'>
      <div className='header-logo'>
        <Link to='/'><Icon id='logo' /></Link>
      </div>



      <div className='header-navigation'>
        {hideHeader ? null :
          <>
            <div className='header-search'>
              <input value={searchTerm} onChange={handleChange} className='search-input' placeholder='Search' type='text'></input>
              <button onClick={handleSubmit} className='search-btn' type='button'>Find</button>
            </div>
            <div className='header-links'>
              <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Youth</li>
                <li>Accessories</li>
                <li>Brands</li>
                <li>Kinds of sport</li>
                <li>Sale</li>
              </ul>
            </div>
          </>}

      </div>
      <div className='header-icons'>
        {hideHeader ? null :
          <>
            <Icon id='phone' className='haeder-icon' />
            <Icon id='heart' className='haeder-icon' />
            <Link to='/cart'><Icon id='cart' className='haeder-icon' /></Link>
          </>}
      </div>


    </header>
  )
}

export default Header