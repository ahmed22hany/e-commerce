import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Banner2 from '../components/Banner2'
import Filterside from '../components/Filterside'
import GridListProducts from '../components/GridListProducts'
import ProductNoSlider from '../components/ProductNoSlider'
import ProductPage2 from '../components/ProductPage2'
import Productswithtwopages from '../components/Productswithtwopages'
import RefineSerach from '../components/RefineSerach'
import SaleOff from '../components/SaleOff'
import SortShow from '../components/SortShow'
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
                <Flex flexDirection={'column'} w={'100%'}>
                    <RefineSerach />
                    <GridListProducts />

                </Flex>

            </Flex>

            <Productswithtwopages />

        </>
    )
}

export default ProductListing