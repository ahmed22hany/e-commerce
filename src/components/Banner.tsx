import React from 'react'
import { Box, Badge, Text, Center, Flex } from '@chakra-ui/react';

const Banner = () => {
    return (
        <Box p={'4'} bg={'#F5F5F5'}>
            <Center >
                <Flex alignItems={'center'}>
                    <Badge mx={'10px'} bg={'blue.600'} color={'#FFF'}>OFFER</Badge>
                    <Text><b>Need It Today?</b> Free In Store & Pickup / <b>$9.99</b> Same Day Delivery</Text>
                </Flex>
            </Center>
        </Box>
    )
}

export default Banner