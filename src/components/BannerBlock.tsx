import React from 'react'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'

const BannerBlock = () => {
    return (
        <Box width={'100%'} px={'8'} my={'80px'} position={'relative'}>
            <Flex width={'100%'} gap={'10'}>
                <Box width={'100%'} position={'relative'} transition={'all .5s ease'} overflow={'hidden'} >
                    <Image src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/Cms-3.jpg' transition={'all .5s ease'} >
                    </Image>
                    <Box position={'absolute'} bottom={'70px'} px={'10'} width={'100%'}>
                        <Text color={'#FFF'} fontSize={'30px'}>Starting At Only $5,500</Text>
                        <Box>
                            <Flex justifyContent={'space-between'} alignItems={'center'} width={'100%'} position={'relative'}>
                                <Heading fontSize={'60px'} color={'#FFF'} height={'100%'}>Brand Laptop</Heading>
                                <Button position={'absolute'} right={'0'} bottom={'0'} borderRadius={'20px'} bg={'#f7d929'} opacity={'0'} transition={'all .5s ease-in-out'} _hover={{ bg: '#222', color: '#FFF' }}>SHOP NOW</Button>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
                <Box width={'100%'} position={'relative'} transition={'all .5s ease'} overflow={'hidden'}>
                    <Image src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/Cms-4.jpg' transition={'all .5s ease'}>
                    </Image>
                    <Box position={'absolute'} bottom={'70px'} px={'10'} width={'100%'}>
                        <Text color={'#FFF'} fontSize={'30px'}>Starting At Only $5,500</Text>
                        <Box>
                            <Flex justifyContent={'space-between'} alignItems={'center'} width={'100%'} position={'relative'}>
                                <Heading fontSize={'60px'} color={'#FFF'} height={'100%'}>Casual Shoes</Heading>
                                <Button position={'absolute'} right={'0'} bottom={'7px'} borderRadius={'20px'} bg={'#f7d929'} opacity={'0'} transition={'all .5s ease-in-out'} _hover={{ bg: '#222', color: '#FFF' }}>SHOP NOW</Button>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default BannerBlock