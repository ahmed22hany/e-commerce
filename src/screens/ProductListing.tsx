import { Flex } from '@chakra-ui/react'
import React from 'react'
import Banner2 from '../components/Banner2'
import Filterside from '../components/Filterside'
import ProductNoSlider from '../components/ProductNoSlider'
import ProductPage2 from '../components/ProductPage2'
import SaleOff from '../components/SaleOff'
import TrendingItems from '../components/TrendingItems'

const ProductListing = () => {
    return (
        <>
            <Banner2 />
            <Flex px={'8'}>
                <Flex flexDirection={'column'} w={'30%'}>
                    <Filterside />
                    <TrendingItems />
                    <SaleOff />
                </Flex>
                <ProductNoSlider />
                <ProductPage2 />
            </Flex>

        </>
    )
}

export default ProductListing