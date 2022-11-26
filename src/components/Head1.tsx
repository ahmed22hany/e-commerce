import React from 'react'
import { Center, Heading, Text } from '@chakra-ui/react'

const Head1 = () => {
    return (
        <Center flexDirection={'column'}>
            <Heading my={'3'}>Trending Items</Heading>
            <Text mb={'3'}>Want to stay in trend? Take a look at these super trendy products.</Text>
        </Center>
    )
}

export default Head1