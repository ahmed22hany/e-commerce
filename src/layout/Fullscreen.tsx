import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
interface FulscreenProps {
    children: React.ReactElement;
}

const Fullscreen = (props: FulscreenProps) => {
    return (
        <Box>
            <Navbar />
            {props.children}
            <Box>Footer</Box>
        </Box>
    )
}

export default Fullscreen