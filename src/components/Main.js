import React from 'react'
import sneakers1 from '../images/product-sneakers1.png'

const Main = () => {
  return (
    <div className='main-content'>

        <aside className='filter'>
          <div className='filter-wrapper'>
            <h3>Footwear</h3>
            <div className='filter-block'>
              <h4>Category</h4>
              <div><input type='checkbox' name='running'/><label for='running'>Running shoes</label></div> 
              <div><input type='checkbox' name='training' /><label for='training' >Training shoes</label></div> 
              <div><input type='checkbox' name='track-and-field' /><label for='track-and-field'>Track and Field shoes</label></div> 
              <div><input type='checkbox' name='lifestyle' /><label for='lifestyle'>Lifestyle shoes</label></div> 
            </div>

            <div className='filter-block'>
              <h4>Department</h4>
              <div><input type='checkbox' name='women'/><label for='women'>Women’s</label></div> 
              <div><input type='checkbox' name='men' /><label for='men' >Men’s</label></div> 
              <div><input type='checkbox' name='unisex' /><label for='unisex'>Unisex</label></div> 
            </div>

            <div className='filter-block'>
              <h4>Brand</h4>
              <div><input type='checkbox' name='adidas'/><label for='adidas'>Adidas</label></div> 
              <div><input type='checkbox' name='nike' /><label for='nike' >Nike</label></div> 
              <div><input type='checkbox' name='new-balance' /><label for='new-balance'>New Balance</label></div> 
              <div><input type='checkbox' name='puma'/><label for='puma'>Puma</label></div> 
              <div><input type='checkbox' name='reebook' /><label for='reebook' >REEBOOK</label></div> 
              <div><input type='checkbox' name='the-north-face' /><label for='the-north-face'>The North Face</label></div> 
            </div>

            <div className='filter-block'>
              <h4>Price</h4>
            </div>

            <div className='filter-block'>
              <h4>Size</h4>
              <div><input type='checkbox' name='size-6'/><label for='size-6'>6</label></div> 
              <div><input type='checkbox' name='size-6.5' /><label for='size-6.5' >6.5</label></div> 
              <div><input type='checkbox' name='size-7' /><label for='size-7'>7</label></div> 
              <div><input type='checkbox' name='size-7.5'/><label for='size-7.5'>7.5</label></div> 
              <div><input type='checkbox' name='size-8' /><label for='size-8' >8</label></div> 
              <div><input type='checkbox' name='size-8.5' /><label for='size-8.5'>8.5</label></div> 
            </div>

            <div className='filter-block'>
              <h4>Color</h4>
              <div><input type='checkbox' name='black'/><label for='black'>Black</label></div> 
              <div><input type='checkbox' name='gray' /><label for='gray' >Gray</label></div> 
              <div><input type='checkbox' name='white' /><label for='white'>White</label></div> 
              <div><input type='checkbox' name='blue'/><label for='blue'>Blue</label></div> 
              <div><input type='checkbox' name='pink' /><label for='pink' >Pink</label></div> 
              <div><input type='checkbox' name='brown' /><label for='brown'>Brown</label></div> 
            </div>

          </div>
        </aside>

        <main>

          <div className='card'>
            <img  className='card-image' src={sneakers1} alt='sneakers' />
            <div className='card-description'>
              <div className='lables'>
                <span className='new-arrival-label'>New arrival</span>
                <span className='sale-label'>-20%</span>
              </div>
              <p>Women's running shoes Nike QUEST</p>
              <span className='card-price'>$150</span>
            </div>
          </div>

          <div className='card'>
            <img  className='card-image' src={sneakers1} alt='sneakers' />
            <div className='card-description'>
              <div className='lables'>
                <span className='new-arrival-label'>New arrival</span>
                <span className='sale-label'>-20%</span>
              </div>
              <p>Women's running shoes Nike QUEST</p>
              <span className='card-price'>$150</span>
            </div>
          </div>

          <div className='card'>
            <img  className='card-image' src={sneakers1} alt='sneakers' />
            <div className='card-description'>
              <div className='lables'>
                <span className='new-arrival-label'>New arrival</span>
                <span className='sale-label'>-20%</span>
              </div>
              <p>Women's running shoes Nike QUEST</p>
              <span className='card-price'>$150</span>
            </div>
          </div>

          <div className='card'>
            <img  className='card-image' src={sneakers1} alt='sneakers' />
            <div className='card-description'>
              <div className='lables'>
                <span className='new-arrival-label'>New arrival</span>
                <span className='sale-label'>-20%</span>
              </div>
              <p>Women's running shoes Nike QUEST</p>
              <span className='card-price'>$150</span>
            </div>
          </div>

          <div className='card'>
            <img  className='card-image' src={sneakers1} alt='sneakers' />
            <div className='card-description'>
              <div className='lables'>
                <span className='new-arrival-label'>New arrival</span>
                <span className='sale-label'>-20%</span>
              </div>
              <p>Women's running shoes Nike QUEST</p>
              <span className='card-price'>$150</span>
            </div>
          </div>

          <div className='card'>
            <img  className='card-image' src={sneakers1} alt='sneakers' />
            <div className='card-description'>
              <div className='lables'>
                <span className='new-arrival-label'>New arrival</span>
                <span className='sale-label'>-20%</span>
              </div>
              <p>Women's running shoes Nike QUEST</p>
              <span className='card-price'>$150</span>
            </div>
          </div>

          <div className='card'>
            <img  className='card-image' src={sneakers1} alt='sneakers' />
            <div className='card-description'>
              <div className='lables'>
                <span className='new-arrival-label'>New arrival</span>
                <span className='sale-label'>-20%</span>
              </div>
              <p>Women's running shoes Nike QUEST</p>
              <span className='card-price'>$150</span>
            </div>
          </div>

          <div className='card'>
            <img  className='card-image' src={sneakers1} alt='sneakers' />
            <div className='card-description'>
              <div className='lables'>
                <span className='new-arrival-label'>New arrival</span>
                <span className='sale-label'>-20%</span>
              </div>
              <p>Women's running shoes Nike QUEST</p>
              <span className='card-price'>$150</span>
            </div>
          </div>

          <div className='card'>
            <img  className='card-image' src={sneakers1} alt='sneakers' />
            <div className='card-description'>
              <div className='lables'>
                <span className='new-arrival-label'>New arrival</span>
                <span className='sale-label'>-20%</span>
              </div>
              <p>Women's running shoes Nike QUEST</p>
              <span className='card-price'>$150</span>
            </div>
          </div>

        </main>

      </div>
  )
}

export default Main