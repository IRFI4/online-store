import Icon from '../sprite/Icon'

const Footer = () => {
    return (
        <footer className="footer">
        <div className='footer-shop'>
          <h3>Shop</h3>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Yuoth</li>
            <li>Accessories</li>
            <li>Brands</li>
            <li>Kinds of sport</li>
          </ul>
        </div>
        <div className='footer-info'>
          <h3>Information</h3>
          <ul>
            <li>Shipping & Returns</li>
            <li>Privacy polocy</li>
            <li>Accessibility</li>
            <li>Team shop</li>
            <li>Size chart</li>
          </ul>
        </div>
        <div className='footer-explore'>
          <h3>Explore</h3>
          <ul>
            <li>Contact</li>
            <li>Catalogs</li>
            <li>Influencer program</li>
          </ul>
        </div>
        <div className='footer-customer-servise'>
          <h3>Customer servise</h3>
          <ul>
            <li>Contact</li>
            <li>Catalogs</li>
            <li>Influencer program</li>
          </ul>
        </div>
        <div className='footer-connect-with-us'>
          <h3>Connect with us</h3>
          <p>Subscribe to receive updates, access to exclusive deals and more.</p>
          <div className='connect-with-us-form'>
            <input type='email' placeholder='Enter your email here*'></input>
            <button type='submit'>Join</button>
          </div>
          <div className='social-media'>
            <Icon id='instagram' className='footer-icon'/>
            <Icon id='facebook' className='footer-icon'/>
            <Icon id='twitter' className='footer-icon'/>

        </div>
        </div>
      </footer>
    )
}

export default Footer