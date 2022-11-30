import React from 'react'
import { Button, Box, Flex, Image, Center, Menu, MenuButton, MenuList, MenuItem, Input, ListItem, Link, Text, Heading, UnorderedList, useMediaQuery } from '@chakra-ui/react'

const FooterCopyright = () => {
    const [isSmallerThan980] = useMediaQuery('(min-width: 979px)')
    return (
        <>
            {isSmallerThan980
                ?
                <Box p={'5'}>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        <Box><Text>Powered By Ahmed Hany &#169; 2022</Text></Box>
                        <Box>
                            <Flex>
                                <Image mx={'1'} src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/visa.png' />
                                <Image mx={'1'} src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/discover.png' />
                                <Image mx={'1'} src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/maestro.png' />
                                <Image mx={'1'} src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/master.png' />
                                <Image mx={'1'} src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/paypal.png' />
                                <Image mx={'1'} src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/mastercard.png' />
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
                :
                <Box p={'5'}>
                    <Flex alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                        <Box><Text>Powered By Ahmed Hany &#169; 2022</Text></Box>
                        <Box>
                            <Flex>
                                <Image mx={'1'} src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/visa.png' />
                                <Image mx={'1'} src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/discover.png' />
                                <Image mx={'1'} src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/maestro.png' />
                                <Image mx={'1'} src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/master.png' />
                                <Image mx={'1'} src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/paypal.png' />
                                <Image mx={'1'} src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/mastercard.png' />
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            }
        </>
    )
}

export default FooterCopyright