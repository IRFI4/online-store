import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import TopSellers from '../components/TopSellers'
import Slider from '../components/Slider'
import Brands from '../components/Brands'
import Explore from '../components/Explore'

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