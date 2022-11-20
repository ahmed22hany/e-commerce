import React from 'react'
import Heroimage from "../components/Heroimage";
import Banner from '../components/Banner';
import Services from '../components/Services';
import Product from '../components/Product';
import Adverts from '../components/Adverts';
import Head1 from '../components/Head1';
import Head2 from '../components/Head2';
import DealDay from '../components/DealDay';
import Head3 from '../components/Head3';
import Shopcat from '../components/Shopcat';
import BannerBlock from '../components/BannerBlock';
import Brands from '../components/Brands';
import Combine from '../components/Combine';


const Homepage = () => {
    return (
        <>
            <Banner />
            <Heroimage />
            <Services />
            <Head1 />
            <Product />
            <Adverts />
            <Head2 />
            <Product />
            <DealDay />
            <Head3 />
            <Shopcat />
            <BannerBlock />
            <Brands />
            <Combine />
        </>
    )
}

export default Homepage