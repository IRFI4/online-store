import React from 'react'
import Slider from 'react-slider'
import { useState } from 'react'

const DoubleRange = () => {
    // Current MIN, MAX 
    const [values, setValues] = useState([20, 130])

    const MIN = 5
    const MAX = 150

    return (
        <div className='range-wrapper'>
            <h4>Price</h4>
            <div className="values">
                <div className='price-range'>
                    <div className='value'>${values[0]}</div>
                    <div className='value'>${values[1]}</div>
                    <button className='confirm'>ok</button>
                </div>
                <Slider
                    className={"range-slider"}
                    trackClassName={"range-track"}
                    thumbActiveClassName={"thumb-active"}
                    onChange={setValues}
                    step={5}
                    value={values}
                    min={MIN}
                    max={MAX}
                />
            </div>
        </div>
    )
}

export default DoubleRange