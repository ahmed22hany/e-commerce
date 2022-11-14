import React from 'react'
import { Button, Box, Flex, Image, Center, Menu, MenuButton, MenuList, MenuItem, Input, InputRightElement, InputGroup } from '@chakra-ui/react'
import { CgChevronDown } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'
import { FiRefreshCcw, FiShoppingBag } from 'react-icons/fi'
import { BsHeart } from 'react-icons/bs'
import DrawerExample from './DrawerExample'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
const account = ['Login', 'Sign Up', 'Checkout', 'Currency']

const Navbar = () => {
    const category = useSelector((store: RootState) => store.categories.data)
    return (
        <Box bg={'#f7d929'} p={'5'}>
            <Flex>
                <Box width={'100%'}>
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


                <Box width={'100%'}>
                    <Flex alignItems={'center'} height={'100%'}>
                        <Center>
                            <Box>
                                <Menu>
                                    <MenuButton as={Button} _hover={{ bg: '#FFF' }} _active={{ bg: '#FFF' }} borderRightRadius={'0px'} borderRightColor={'transparent'} textAlign={'left'} borderLeftRadius={'20px'} width={'200px'} bg={'#fff'} rightIcon={<CgChevronDown />}>
                                        All Catigories
                                    </MenuButton>
                                    <MenuList overflow={'scroll'} height={'400px'}>
                                        {category.map((value) => {
                                            return <MenuItem>{value}</MenuItem>
                                        })}

                                    </MenuList>
                                </Menu>
                            </Box>
                            <Box className='bef'></Box>
                            <Box>
                                <Flex>
                                    <InputGroup width={'265px'} >
                                        <Input _focus={{ border: 'none', outline: 'none', boxShadow: 'none' }} placeholder='Search Products...' border={'0px'} borderLeftRadius={'0px'} type={'text'} bg={'#fff'} borderRightRadius={'20px'} />
                                        <InputRightElement children={<BiSearch />} />
                                    </InputGroup>
                                </Flex>
                            </Box>
                        </Center>
                    </Flex>
                </Box>

                <Box width={'100%'}>
                    <Flex justifyContent={'space-around'} alignItems={'center'} height={'100%'}>
                        <Box>
                            <Menu>
                                <MenuButton as={Button} _hover={{ bg: 'black' }} _active={{ bg: 'black' }} width={'200px'} bg={'black'} color={'#FFF'} fontSize={'16px'} borderLeftRadius={'20px'} borderRightRadius={'20px'} rightIcon={<CgChevronDown />} >
                                    MY ACCOUNT
                                </MenuButton>
                                <MenuList>
                                    {account.map((details) => {
                                        return <MenuItem>{details}</MenuItem>
                                    })}
                                </MenuList>
                            </Menu>
                        </Box>

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

            </Flex >

        </Box >
    )
}

export default Navbar