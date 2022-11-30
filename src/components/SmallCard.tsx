import { Box, Image, Stack, Text, Link, Center, Flex } from '@chakra-ui/react'
import React from 'react'
import StarRating from './StarRating'


interface Cardprops {
    image: string
    product: string
    feedback: string
    price: number
    hover: string
}

const SmallCard = (props: Cardprops) => {
    const { image, product, feedback, price, hover } = props;
    return (
        <>
            <Flex alignItems={'center'}>
                <Box
                    px={'1'}
                    py={'4'}
                    display={'flex'}
                    flexDirection={'column'}
                    border={'1px'}
                    borderColor='gray.200'
                    margin={'3'}
                    width={'100px'}
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
                    </div>
                </Box>
                <Stack
                >
                    <Text
                        fontSize="16px"
                        letterSpacing="wide"
                        lineHeight={'20px'}
                        color="#222"
                        px={'4'}
                        whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'}
                        width={'200px'}
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
            </Flex>
        </>
    )
}

export default SmallCard