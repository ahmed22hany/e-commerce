import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface FulscreenProps {
    children: React.ReactElement
}

const Fullscreen = (props: FulscreenProps) => {
    return (
        <Box>
            <Navbar />
            {props.children}
            <Footer />
        </Box>
    )
}

export default Fullscreen