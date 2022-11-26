import React from 'react'
import { Button, Box, Flex, Image, Center, Menu, MenuButton, MenuList, MenuItem, Input, ListItem, Link, Text, Heading, UnorderedList, useMediaQuery } from '@chakra-ui/react'
import { SlEnvolopeLetter } from 'react-icons/sl'

const FooterSubscribe = () => {
    const [isSmallerThan768] = useMediaQuery('(min-width: 767px)');
    return (
        <>
            {isSmallerThan768
                ?
                <Box bg={'#f7d929'} p={'5'} width={'100%'}>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Box >
                            <Flex alignItems={'center'}>
                                <SlEnvolopeLetter fontSize={'35px'} />
                                <Box ms={'6'}>
                                    <Heading as='h4' size='md'>Subscribe To Our Newsletter</Heading>
                                    <Text>Get all the latest information on Events, Sales and Offers. </Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box >
                            <Input _focus={{ border: 'none', outline: 'none', boxShadow: 'none' }} type={'email'} placeholder={'Your Email Address'} bg={'#FFF'} border={'none'} borderLeftRadius={'20px'} borderRightRadius={'20px'} />
                        </Box>
                        <Box>
                            <Button _hover={{ bg: '#FFF', color: 'black', transition: 'all .5s ease-in' }} bg={'black'} color={'#FFF'} borderLeftRadius={'20px'} borderRightRadius={'20px'} ms={'2'}>Subscribe</Button>
                        </Box>
                    </Flex>
                </Box>
                :
                <Box bg={'#f7d929'} p={'5'} width={'100%'}>
                    <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={'3'}>
                        <Box>
                            <Flex alignItems={'center'} flexDirection={'column'}>
                                <SlEnvolopeLetter fontSize={'35px'} />
                                <Box ms={'6'} textAlign={'center'}>
                                    <Heading as='h4' size='md'>Subscribe To Our Newsletter</Heading>
                                    <Text>Get all the latest information on Events, Sales and Offers. </Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box >
                            <Input _focus={{ border: 'none', outline: 'none', boxShadow: 'none' }} type={'email'} placeholder={'Your Email Address'} bg={'#FFF'} border={'none'} borderLeftRadius={'20px'} borderRightRadius={'20px'} />
                        </Box>
                        <Box>
                            <Button _hover={{ bg: '#FFF', color: 'black', transition: 'all .5s ease-in' }} bg={'black'} color={'#FFF'} borderLeftRadius={'20px'} borderRightRadius={'20px'} ms={'2'}>Subscribe</Button>
                        </Box>
                    </Flex>
                </Box>
            }
        </>
    )
}

export default FooterSubscribe