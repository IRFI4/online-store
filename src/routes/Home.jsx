import { useState, useEffect } from 'react'
import Hero from '../components/home/Hero'
import Categories from '../components/home/Categories'
import TopSellers from '../components/TopSellers'
import Slider from '../components/home/Slider'
import Brands from '../components/home/Brands'
import Explore from '../components/home/Explore'

function Home() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <>
            {loaded ? <div><Hero />
                <Categories />
                <TopSellers title={'Top sellers'} />
                <Slider />
                <Brands />
                <Explore /></div> : null}
        </>
    )
}

export default Home