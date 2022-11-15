import React from 'react'
import Slider from "../components/Slider";
import Banner from '../components/Banner';
import Services from '../components/Services';
import Product from '../components/Product';

const Homepage = () => {
    return (
        <>
            <Banner />
            <Slider />
            <Services />
            <Product />
        </>
    )
}

export default Homepage