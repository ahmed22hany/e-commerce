import Link from 'next/link'
import React from 'react'
import { Button, Box, Flex } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
const Navbar = () => {
    return (
        <nav>
            <div className='container'>
                <Flex>
                    <Box m={4}>ahemd</Box>
                    <Box m={4}>hany</Box>
                </Flex>
                <div className='logo'><Button margin={2} backgroundColor={'red.300'}>Hello</Button></div>
                <div className='menu'><GiHamburgerMenu /></div>

                <div className='search-container'>
                    <div className='category'>
                        <p>All Categories</p>
                    </div>
                    <div className='search-box'>
                        <input type="text" name='search' placeholder='Search Products...' />
                    </div>
                </div>

                <div className='Account'>
                    <div className='drop-account'>
                        <ul>
                            <Link href='./login'>Login</Link>
                            <Link href='./sign-up'>Sign Up</Link>
                            <Link href='./checkout'>Check Out</Link>
                            <Link href='./currency'>Currency</Link>
                        </ul>
                    </div>
                    <div className='icons'>Some Icons</div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar