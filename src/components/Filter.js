import React from 'react'
import DoubleRange from './DoubleRange'

const Filter = () => {
    // props: onFilterChange

    // const handleCheckboxChange = (event) => {
    //     const { id, name, checked } = event.target
    //     // console.log(id, name, checked)
    //     onFilterChange(id, name, checked)
    // }

    return (
        <aside className='filter'>
            <div className='filter-wrapper'>
                <h3>Footwear</h3>
                <div className='filter-block'>
                    <h4>Category</h4>
                    <div><input type='checkbox' name='running' /><label htmlFor='running'>Running shoes</label></div>
                    <div><input type='checkbox' name='training' /><label htmlFor='training' >Training shoes</label></div>
                    <div><input type='checkbox' name='track-and-field' /><label htmlFor='track-and-field'>Track and Field shoes</label></div>
                    <div><input type='checkbox' name='lifestyle' /><label htmlFor='lifestyle'>Lifestyle shoes</label></div>
                </div>

                <div className='filter-block'>
                    <h4>Department</h4>
                    <div><input type='checkbox' name='women' /><label htmlFor='women'>Women’s</label></div>
                    <div><input type='checkbox' name='men' /><label htmlFor='men' >Men’s</label></div>
                    <div><input type='checkbox' name='unisex' /><label htmlFor='unisex'>Unisex</label></div>
                </div>

                <div className='filter-block'>
                    <h4>Brand</h4>
                    <div><input id='brands' type='checkbox' name='adidas' /><label htmlFor='adidas'>Adidas</label></div>
                    <div><input id='brands' type='checkbox' name='nike' /><label htmlFor='nike' >Nike</label></div>
                    <div><input id='brands' type='checkbox' name='new-balance' /><label htmlFor='new-balance'>New Balance</label></div>
                    <div><input id='brands' type='checkbox' name='puma' /><label htmlFor='puma'>Puma</label></div>
                    <div><input id='brands' type='checkbox' name='reebook' /><label htmlFor='reebook' >REEBOOK</label></div>
                    <div><input id='brands' type='checkbox' name='the-north-face' /><label htmlFor='the-north-face'>The North Face</label></div>
                </div>

                <div className='filter-price'>
                    <DoubleRange />
                </div>

                <div className='filter-block'>
                    <h4>Size</h4>
                    <div><input type='checkbox' name='size-6' /><label htmlFor='size-6'>6</label></div>
                    <div><input type='checkbox' name='size-6.5' /><label htmlFor='size-6.5' >6.5</label></div>
                    <div><input type='checkbox' name='size-7' /><label htmlFor='size-7'>7</label></div>
                    <div><input type='checkbox' name='size-7.5' /><label htmlFor='size-7.5'>7.5</label></div>
                    <div><input type='checkbox' name='size-8' /><label htmlFor='size-8' >8</label></div>
                    <div><input type='checkbox' name='size-8.5' /><label htmlFor='size-8.5'>8.5</label></div>
                </div>

                <div className='filter-block'>
                    <h4>Color</h4>
                    <div><input type='checkbox' name='black' /><label htmlFor='black'>Black</label></div>
                    <div><input type='checkbox' name='gray' /><label htmlFor='gray' >Gray</label></div>
                    <div><input type='checkbox' name='white' /><label htmlFor='white'>White</label></div>
                    <div><input type='checkbox' name='blue' /><label htmlFor='blue'>Blue</label></div>
                    <div><input type='checkbox' name='pink' /><label htmlFor='pink' >Pink</label></div>
                    <div><input type='checkbox' name='brown' /><label htmlFor='brown'>Brown</label></div>
                </div>

            </div>
        </aside>
    )
}

export default Filter