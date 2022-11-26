import { Box, Center, Flex, Image, Text, Link, Button } from '@chakra-ui/react'
import React from 'react'
import { BsApple } from 'react-icons/bs'
import { FaXbox } from 'react-icons/fa'
import '../countdown'


const DealDay = () => {
    return (
        <Box px={'5'} my={'100px'}>
            <Flex gap={10}>

                <Box width={'80%'} padding={'30px'} borderStyle={'solid'} borderWidth={'4px'} borderColor={'#ccc'} bgGradient='linear(to-b, #FFFFFF, #F5F5F5)'>
                    <Center>
                        <Flex flexDirection={'column'}>
                            <Image src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/Cms-1.png' />
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} fontSize={'30px'}> <BsApple />
                                <Text ms={'4'} my={'3'}>MacBooks</Text>
                            </Box>
                            <Text fontSize={'30px'} my={'3'}>
                                <Center>
                                    Starting At Only $2,500
                                </Center>
                            </Text>
                            <Box>
                                <Flex gap={'5'} alignItems={'center'} height={'100%'}>
                                    <Image bgImage="url('https://opencart.templatemela.com/OPC10/OPC100247/OPC1/catalog/view/theme/OPC100247_1/image/megnor/bank.svg')"
                                        width={'100px'} height={'40px'} backgroundSize={'100%'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'} />
                                    <Box>
                                        <Text fontSize={'20px'} fontWeight={'semibold'}>10% Instant Discount*
                                            <Text textAlign={'center'} fontSize={'16px'} fontWeight={'normal'}>On ABC Credit card</Text>
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Center>
                </Box>

                <Box width={'80%'} padding={'30px'} borderStyle={'solid'} borderWidth={'4px'} borderColor={'#ccc'} bgGradient='linear(to-b, #FFFFFF, #F5F5F5)'>
                    <Center flexDirection={'column'}>
                        <Box my={'3'} fontSize={'50px'} textAlign={'center'} maxWidth={'200px'} fontWeight={'bold'}><span style={{ background: '#f7d929', padding: '5px' }}>Deal</span> Of The Day</Box>
                        <Link _hover={{ color: '#f7d929' }} href='#' fontSize={'18px'} my={'3'} color={'blue'}>Hurry Up!!</Link>
                        <Box bgGradient='linear(to-b, #FFFFFF, #F5F5F5)'>
                            <Flex justifyContent={'center'}>
                                <Box mx={'2'} textAlign={'center'} fontSize={'20px'}>
                                    <Flex>
                                        <div id='demo-1'></div>
                                        <span style={{ margin: '0 0 0 10px' }}>:</span>
                                    </Flex>
                                    <Text fontSize={'16px'} color={'GrayText'}>Day</Text>
                                </Box>
                                <Box mx={'2'} textAlign={'center'} fontSize={'20px'}>
                                    <Flex>
                                        <div id='demo-2'></div>
                                        <span style={{ margin: '0 0 0 10px' }}>:</span>
                                    </Flex>
                                    <Text fontSize={'16px'} color={'GrayText'}>Hour</Text>
                                </Box>
                                <Box mx={'2'} textAlign={'center'} fontSize={'20px'}>
                                    <Flex>
                                        <div id='demo-3'></div>
                                        <span style={{ margin: '0 0 0 10px' }}>:</span>
                                    </Flex>
                                    <Text fontSize={'16px'} color={'GrayText'}>Min</Text>
                                </Box>
                                <Box mx={'2'} textAlign={'center'} fontSize={'20px'}>
                                    <div id='demo-4'></div>
                                    <Text fontSize={'16px'} color={'GrayText'}>Sec</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Button transition={'all .5s ease'} my={'5'} bg={'#f7d929'} borderRadius={'20px'} px={'6'} fontWeight={'semibold'} fontSize={'14px'} _hover={{ bg: '#222', color: '#fff', fontSize: '14px', transition: 'all .5s ease' }}>SHOP NOW</Button>
                        <Text fontSize={'20px'}>Get Deals. Every Day</Text>
                    </Center>
                </Box>

                <Box width={'80%'} padding={'30px'} borderStyle={'solid'} borderWidth={'4px'} borderColor={'#ccc'} bgGradient='linear(to-b, #FFFFFF, #F5F5F5)'>
                    <Center>
                        <Flex flexDirection={'column'}>
                            <Image src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/Cms-2.png' width={'208px'} height={'211px'} margin={'auto'} />
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} fontSize={'30px'}> <FaXbox />
                                <Text ms={'4'} my={'3'}>Xbox</Text>
                            </Box>
                            <Text fontSize={'30px'} my={'3'}>
                                <Center>
                                    Up To Flat 50% Off
                                </Center>
                            </Text>
                            <Box>
                                <Flex gap={'5'} alignItems={'center'} height={'100%'}>
                                    <Image bgImage="url('https://opencart.templatemela.com/OPC10/OPC100247/OPC1/catalog/view/theme/OPC100247_1/image/megnor/bank.svg')"
                                        width={'100px'} height={'40px'} backgroundSize={'100%'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'} />
                                    <Box>
                                        <Text fontSize={'20px'} fontWeight={'semibold'}>10% Instant Discount*
                                            <Text textAlign={'center'} fontSize={'16px'} fontWeight={'normal'}>On ABC Credit card</Text>
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Center>
                </Box>

            </Flex>
        </Box>
    )
}

export default DealDay