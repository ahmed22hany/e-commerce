import React, { useState } from 'react'
import { Button, Box, Flex, Image, Center, Menu, MenuButton, MenuList, MenuItem, Input, InputRightElement, InputGroup, Hide, Show, useMediaQuery, IconButton } from '@chakra-ui/react'
import { CgChevronDown } from 'react-icons/cg'
import { AiOutlineUser } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
const account = ['Login', 'Sign Up', 'Checkout', 'Currency']
const NavbarButton = () => {
    const category = useSelector((store: RootState) => store.categories.data)
    const [isLargerthan1200] = useMediaQuery('(min-width: 1200px)')
    return (
        <>
            {isLargerthan1200
                ?
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
                :
                <>
                    <Box>
                        <Menu>
                            <MenuButton as={IconButton}
                                aria-label='Options'
                                icon={<AiOutlineUser fontSize={'27px'} />}
                                variant='outline'
                                border={'none'} _active={{ bg: 'transparent' }} _hover={{ bg: 'transparent' }} _selected={{ bg: 'transparent' }}
                            >
                            </MenuButton>
                            <MenuList>
                                {account.map((details) => {
                                    return <MenuItem>{details}</MenuItem>
                                })}
                            </MenuList>
                        </Menu>
                    </Box>
                </>
            }
        </>
    )
}

export default NavbarButton