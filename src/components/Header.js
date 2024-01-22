import Icon from "../sprite/Icon"

const Header = () => {
    return (
        <header className='header'>
        <div className='header-logo'>
          <Icon id='logo' />
        </div>
        <div className='header-navigation'>
          <div className='header-search'>
            <input className='search-input' placeholder='Search' type='text'></input>
            <button className='search-btn' type='button'>Find</button>
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
        </div>
        <div className='header-icons'>
          <Icon id='phone' className='haeder-icon'/>
          <Icon id='heart' className='haeder-icon'/>
          <Icon id='cart' className='haeder-icon'/>
        </div>
      </header>
    )
}

export default Header