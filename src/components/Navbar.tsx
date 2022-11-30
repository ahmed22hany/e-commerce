import React from 'react'
import { Button, Box, Flex, Image, Center, Menu, MenuButton, MenuList, MenuItem, Input, InputRightElement, InputGroup, Hide, Show, useMediaQuery } from '@chakra-ui/react'
import { CgChevronDown } from 'react-icons/cg'
import { FiRefreshCcw, FiShoppingBag } from 'react-icons/fi'
import { BsHeart } from 'react-icons/bs'
import DrawerExample from './DrawerExample'
import NavbarSearch from './NavbarSearch'
import NavbarButton from './NavbarButton'




const Navbar = () => {
    const [isLargerthan1200] = useMediaQuery('(min-width: 1200px)')
    return (
        <Box bg={'#f7d929'} p={'5'} position={'relative'}>
            <Flex>
                {isLargerthan1200
                    ?
                    <Box w={'100%'}>
                        <Flex>
                            <Center>
                                <Image
                                    src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/Logo.png'
                                    alt='Logo'
                                />
                                <Box ms={'5'} fontSize={'30'}>
                                    <DrawerExample />
                                </Box>
                            </Center>
                        </Flex>
                    </Box>
                    :
                    <Box w={'100%'}>
                        <Flex>
                            <Center>
                                <Image
                                    src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/Logo.png'
                                    alt='Logo'
                                />
                                <Box fontSize={'30'}>
                                    <DrawerExample />
                                </Box>
                            </Center>
                        </Flex>
                    </Box>
                }


                <NavbarSearch />

                {isLargerthan1200 ?
                    <Box width={'100%'}>
                        <Flex justifyContent={'space-around'} alignItems={'center'} height={'100%'}>
                            <NavbarButton />

                            <Box fontSize={'25'} >
                                <FiRefreshCcw />
                            </Box>
                            <Box fontSize={'25'} position={'relative'}>
                                <BsHeart />
                                <Box width={'20px'} height={'20px'} position={'absolute'} top={'-12px'} right={'-3'} bg={'black'} borderRadius={'50%'}>
                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', color: '#fff' }}>0</span>
                                </Box>
                            </Box>
                            <Box fontSize={'25'} position={'relative'}>
                                <FiShoppingBag />
                                <Box width={'20px'} height={'20px'} position={'absolute'} top={'-12px'} right={'-3'} bg={'black'} borderRadius={'50%'}>
                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', color: '#fff' }}>0</span>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                    :
                    <Box width={'100%'}>
                        <Flex justifyContent={'space-around'} alignItems={'center'} height={'100%'} width={'100%'}>
                            <NavbarButton />

                            <Box fontSize={'25'} >
                                <FiRefreshCcw />
                            </Box>
                            <Box fontSize={'25'} position={'relative'} >
                                <BsHeart />
                                <Box width={'20px'} height={'20px'} position={'absolute'} top={'-12px'} right={'-3'} bg={'black'} borderRadius={'50%'}>
                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', color: '#fff' }}>0</span>
                                </Box>
                            </Box>
                            <Box fontSize={'25'} position={'relative'}>
                                <FiShoppingBag />
                                <Box width={'20px'} height={'20px'} position={'absolute'} top={'-12px'} right={'-3'} bg={'black'} borderRadius={'50%'}>
                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', color: '#fff' }}>0</span>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                }

            </Flex >

        </Box >
    )
}

export default Navbar