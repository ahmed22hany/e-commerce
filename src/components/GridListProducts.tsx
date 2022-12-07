import React, { useState } from 'react'
import { Box, Text, Button, IconButton, Flex } from '@chakra-ui/react'
import { BsFillGridFill } from 'react-icons/bs'
import { TfiLayoutListThumb } from 'react-icons/tfi'
import ProductNoSlider from './ProductNoSlider';
import ProductPage2 from './ProductPage2';
import SortShow from './SortShow';




const GridListProducts = () => {
    const [activeIndex, setActiveIndex] = useState(true);
    return (
        <>
            <Box display={'flex'} my={'2'} justifyContent={'space-around'}>
                <Box my={'auto'}>
                    <Flex>
                        <Box me={'1'}>
                            <BsFillGridFill onClick={() => setActiveIndex(true)} cursor={'pointer'} />
                        </Box>
                        <TfiLayoutListThumb onClick={() => setActiveIndex(false)} cursor={'pointer'} />
                    </Flex>
                </Box>
                <Box>
                    <SortShow />
                </Box>
            </Box>
            {activeIndex ? <ProductNoSlider /> : <ProductPage2 />}

        </>
    );
}



export default GridListProducts

