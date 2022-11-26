import React, { useState } from "react";
import {
    Box,
    Image,
    Text,
    Link,
    Stack,
    Flex,
    Button,
    Center
} from "@chakra-ui/react";
import { BsArrowsFullscreen, BsHeart } from 'react-icons/bs'
import StarRating from './StarRating'

interface Cardprops {
    image: string
    product: string
    feedback: string
    price: number
    hover: string
}

function Card(props: Cardprops) {
    const { image, product, feedback, price, hover } = props;
    return (
        <div className="hov">
            <Box
                px={'1'}
                py={'4'}
                display={'flex'}
                flexDirection={'column'}
                border={'1px'}
                borderColor='gray.200'
                borderRadius={'15px'}
                margin={'3'}
            >
                <div className="hope">
                    <Image
                        maxWidth={'100%'}
                        margin={'auto'}
                        src={image}
                        alt="product"
                    />
                    {/* div that hold the hover pic */}
                    <img src={hover} className="info" />
                    <div className="icons">
                        <Box my={'3'} cursor={'pointer'}><BsHeart /></Box>
                        <Box cursor={'pointer'}><BsArrowsFullscreen /></Box>
                    </div>
                </div>

                <Stack
                    maxWidth={'236px'}
                >
                    <Text
                        fontSize="16px"
                        letterSpacing="wide"
                        lineHeight={'20px'}
                        color="#222"
                        px={'4'}
                    >
                        {product}
                    </Text>
                    <Link
                        my={1}
                        fontWeight="semibold"
                        href="#"
                        height={'100%'}
                        px={'4'}
                        display={'flex'}
                        alignItems={'center'}
                    >
                        <Box height={'100%'}> <StarRating /></Box>
                        <span style={{ fontSize: '14px', margin: '0 4px' }}>(1)</span>
                        {feedback}
                    </Link>

                    <Text my={2} color="#222" fontSize={'20px'} px={'4'} fontWeight={'semibold'}>
                        <Text color={'#222'}> ${price}</Text>
                    </Text>
                </Stack>
                <Box position={'relative'}>
                    <Center >
                        <button type="button" className="over" style={{
                            marginTop: '10px',
                            backgroundColor: '#f7d929', width: '80%', height: '40px', borderRadius: '20px', fontWeight: '700'
                        }}>
                            ADD TO CART
                        </button>
                    </Center>
                </Box>
            </Box>
        </div>
    );
}

export default Card;
