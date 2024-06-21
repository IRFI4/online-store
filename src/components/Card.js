import React from 'react'
import { useNavigate } from 'react-router-dom'
import Image from './Image'

const Card = (props) => {
    const product = props.object
    const navigate = useNavigate()

    return (
        <div className='card' key={props.id}>
            {props.brand &&
                <div className='card-brand'>
                    <Image url={`/brands/${props.brand}.png`} alt={'test'} />
                </div>}
            <img
                className='card-image'
                onClick={() => navigate(`/product-review/${props.id}`, { state: { product } })}
                src={require(`../images/products/${props.image[0]}.png`)}
                alt='sneakers'
            />
            <div className='card-description'>
                <div className='lables'>
                    {props.label && (<span className='new-arrival-label'>New arrival</span>)}
                    {props.discount && (<span className='sale-label'>-{props.discount}%</span>)}
                </div>
                <p>{props.description}</p>
                <span className='card-price'>${props.price}</span>
            </div>
        </div >
    )
}

export default Card