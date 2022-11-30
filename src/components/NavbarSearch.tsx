import React, { useState } from 'react'
import { Button, Box, Flex, Image, Center, Menu, MenuButton, MenuList, MenuItem, Input, InputRightElement, InputGroup, Hide, Show, useMediaQuery } from '@chakra-ui/react'
import { CgChevronDown } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { RiCloseLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const NavbarSearch = () => {
    const category = useSelector((store: RootState) => store.categories.data)
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isLargerthan1200] = useMediaQuery('(min-width: 1200px)')

    return (
        <>

            {isLargerthan1200
                ?
                <Box>
                    <Flex alignItems={'center'} height={'100%'}>
                        <Center>
                            <Box>
                                <Menu>
                                    <MenuButton as={Button} _hover={{ bg: '#FFF' }} _active={{ bg: '#FFF' }} borderRightRadius={'0px'} borderRightColor={'transparent'} textAlign={'left'} borderLeftRadius={'20px'} width={'200px'} bg={'#fff'} rightIcon={<CgChevronDown />}>
                                        All Catigories
                                    </MenuButton>
                                    <MenuList overflow={'scroll'} height={'400px'}>
                                        {category.map((value) => {
                                            return <MenuItem>{value.name}</MenuItem>
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
                :
                <>
                    {toggleMenu
                        ?
                        <Box display={'flex'} alignItems={'center'} width={'100%'} justifyContent={'flex-end'}>
                            <RiCloseLine color="#222" size={27} onClick={() => setToggleMenu(false)} />
                        </Box>
                        :
                        <Box display={'flex'} alignItems={'center'} width={'100%'} justifyContent={'flex-end'}>
                            <AiOutlineSearch color="#222" size={27} onClick={() => setToggleMenu(true)} />
                        </Box>
                    }

                    {toggleMenu && (
                        <Box position={'absolute'} bottom={'-40px'} right={'0'}>
                            <Flex alignItems={'center'} height={'100%'}>
                                <Center>
                                    <Hide below='sm'>
                                        <Box>
                                            <Menu>
                                                <MenuButton as={Button} _hover={{ bg: '#FFF' }} _active={{ bg: '#FFF' }} borderRightRadius={'0px'} borderRightColor={'transparent'} textAlign={'left'} borderLeftRadius={'20px'} width={'100%'} bg={'#fff'} rightIcon={<CgChevronDown />}>
                                                    All Catigories
                                                </MenuButton>
                                                <MenuList overflow={'scroll'} height={'400px'}>
                                                    {category.map((value) => {
                                                        return <MenuItem>{value.name}</MenuItem>
                                                    })}

                                                </MenuList>
                                            </Menu>
                                        </Box>
                                        <Box className='bef'></Box>
                                    </Hide>
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
                    )}

                </>
            }

        </>
    )
}

export default NavbarSearch