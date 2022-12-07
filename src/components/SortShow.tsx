import React from 'react'
import { Box, Flex, Select, Text } from '@chakra-ui/react'
const SortShow = () => {
    return (
        <>
            <Box>
                <Flex>
                    <Box me={'5'}>
                        <Box>Sort By:</Box>
                        <Select placeholder='Default'>
                            <option value='option1'>Name(A-Z)</option>
                            <option value='option2'>Name(Z-A)</option>
                            <option value='option3'>Price(Low-High)</option>
                            <option value='option3'>Price(High-Low)</option>
                            <option value='option3'>Rating(Highest)</option>
                            <option value='option3'>Rating(Lowest)</option>
                            <option value='option3'>Model(A-Z)</option>
                            <option value='option3'>Model(Z-A)</option>
                        </Select>
                    </Box>
                    <Box>
                        <Text>Show:</Text>
                        <Select placeholder='Default'>
                            <option value='option1'>12</option>
                            <option value='option2'>20</option>
                            <option value='option3'>50</option>
                            <option value='option3'>75</option>
                            <option value='option3'>100</option>
                        </Select>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default SortShow