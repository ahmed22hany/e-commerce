import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'




const Brands = () => {
    const brandlist = [
        { image: 'https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/brand2-165x54.png' },
        { image: 'https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/brand3-165x54.png' },
        { image: 'https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/brand4-165x54.png' },
        { image: 'https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/brand5-165x54.png' },
        { image: 'https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/brand6-165x54.png' },
        { image: 'https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/brand7-165x54.png' }
    ];
    return (
        <Box mb={'60px'}>
            <Flex width={'100%'} justifyContent={'center'}>
                {brandlist.map(function (data) {
                    return (
                        <Box mx={'6'}>
                            <Image src={data.image} />
                        </Box>
                    )
                })
                }
            </Flex>
        </Box>
    )
}

export default Brands