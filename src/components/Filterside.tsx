import { Box, Text, Stack, Heading, Button } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import React from 'react'

const filters = [
    {
        name: 'color',
        values: ['Black', 'Blue', 'White']
    },
    {
        name: 'size',
        values: ['Small', 'Medium', 'Large']
    }
]


const Filterside = () => {
    return (
        <>
            <Box borderBottom={'1px solid #CCC'} py={'2'}>
                <Text fontSize={'16px'} fontWeight={'bold'} mb={'2'}>Reifne Search</Text>
                {filters.map((value) => {
                    return (
                        <>
                            <Heading>{value.name}</Heading>
                            <Stack spacing={1} direction='column'>
                                {value.values.map(item => (
                                    <Checkbox colorScheme='blue' >
                                        {item}
                                    </Checkbox>
                                ))}
                            </Stack>
                        </>
                    )
                })}
                <Box py={'4'}>
                    <Button bgColor={'#F7D929'} borderRadius={'20px'} fontSize={'14px'} _hover={{ bgColor: '#222', color: '#FFF', fontsize: '14px' }}>
                        REFINE SEARCH
                    </Button>
                </Box>
            </Box>

        </>
    )
}


export default Filterside


