import React from 'react'
import { Box, Text, Center, Flex, Link, useMediaQuery } from '@chakra-ui/react';
import { FiTruck } from 'react-icons/fi'
import { BiMessageDetail } from 'react-icons/bi'
import { RiSecurePaymentLine } from 'react-icons/ri'

const pargraph = 'Contrary popular belief Lorem Ipsu not simply random tex';

const Services = () => {
    const [issmallerthan1024] = useMediaQuery('(min-width: 1024px)')
    return (
        <>
            {issmallerthan1024
                ?
                <Box px={'100px'} pb={'50px'} borderBottom={'1px solid #ccc'}>
                    <Flex>
                        <Box width={'100%'} py={'60px'} _hover={{ bg: '#f0f0f0', transition: 'all .5s ease-in-out' }}>
                            <Center flexDirection={'column'}>
                                <Box py={'1.5'}><FiTruck color={'#f7d929'} fontSize={'50px'} /></Box>
                                <Text py={'1.5'} fontSize={'16px'} fontWeight={'700'}>FAST FREE DELIVERY</Text>
                                <Text color={'gray'} py={'1.5'} textAlign={'center'} maxW={'250px'}>{pargraph}</Text>
                                <Link textDecoration={'underline'} fontWeight={'600'} py={'1.5'}>Read More</Link>
                            </Center>
                        </Box>

                        <Box width={'100%'} py={'60px'} _hover={{ bg: '#f0f0f0', transition: 'all .5s ease-in-out' }}>
                            <Center flexDirection={'column'}>
                                <Box py={'1.5'}><BiMessageDetail color={'#f7d929'} fontSize={'50px'} /></Box>
                                <Text py={'1.5'} fontSize={'16px'} fontWeight={'700'}>ONLINE 24/7 SUPPORTS</Text>
                                <Text color={'gray'} py={'1.5'} textAlign={'center'} maxW={'250px'}>{pargraph}</Text>
                                <Link textDecoration={'underline'} fontWeight={'600'} py={'1.5'}>Read More</Link>
                            </Center>
                        </Box>

                        <Box width={'100%'} py={'60px'} _hover={{ bg: '#f0f0f0', transition: 'all .5s ease-in-out' }}>
                            <Center flexDirection={'column'}>
                                <Box py={'1.5'}><RiSecurePaymentLine color={'#f7d929'} fontSize={'50px'} /></Box>
                                <Text py={'1.5'} fontSize={'16px'} fontWeight={'700'}>100% SECURE PAYMENT</Text>
                                <Text color={'gray'} py={'1.5'} textAlign={'center'} maxW={'250px'}>{pargraph}</Text>
                                <Link textDecoration={'underline'} fontWeight={'600'} py={'1.5'}>Read More</Link>
                            </Center>
                        </Box>
                    </Flex>
                </Box>
                :
                <Box pb={'50px'} borderBottom={'1px solid #ccc'}>
                    <Flex flexDirection={'column'} justifyContent={'center'}>
                        <Box width={'100%'} py={'60px'} _hover={{ bg: '#f0f0f0', transition: 'all .5s ease-in-out' }}>
                            <Center flexDirection={'column'}>
                                <Box py={'1.5'}><FiTruck color={'#f7d929'} fontSize={'50px'} /></Box>
                                <Text py={'1.5'} fontSize={'16px'} fontWeight={'700'}>FAST FREE DELIVERY</Text>
                                <Text color={'gray'} py={'1.5'} textAlign={'center'} maxW={'250px'}>{pargraph}</Text>
                                <Link textDecoration={'underline'} fontWeight={'600'} py={'1.5'}>Read More</Link>
                            </Center>
                        </Box>

                        <Box width={'100%'} py={'60px'} _hover={{ bg: '#f0f0f0', transition: 'all .5s ease-in-out' }}>
                            <Center flexDirection={'column'}>
                                <Box py={'1.5'}><BiMessageDetail color={'#f7d929'} fontSize={'50px'} /></Box>
                                <Text py={'1.5'} fontSize={'16px'} fontWeight={'700'}>ONLINE 24/7 SUPPORTS</Text>
                                <Text color={'gray'} py={'1.5'} textAlign={'center'} maxW={'250px'}>{pargraph}</Text>
                                <Link textDecoration={'underline'} fontWeight={'600'} py={'1.5'}>Read More</Link>
                            </Center>
                        </Box>

                        <Box width={'100%'} py={'60px'} _hover={{ bg: '#f0f0f0', transition: 'all .5s ease-in-out' }}>
                            <Center flexDirection={'column'}>
                                <Box py={'1.5'}><RiSecurePaymentLine color={'#f7d929'} fontSize={'50px'} /></Box>
                                <Text py={'1.5'} fontSize={'16px'} fontWeight={'700'}>100% SECURE PAYMENT</Text>
                                <Text color={'gray'} py={'1.5'} textAlign={'center'} maxW={'250px'}>{pargraph}</Text>
                                <Link textDecoration={'underline'} fontWeight={'600'} py={'1.5'}>Read More</Link>
                            </Center>
                        </Box>
                    </Flex>
                </Box>
            }

        </>
    )
}

export default Services