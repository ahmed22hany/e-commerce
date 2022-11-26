import { Box, Button, Center, Flex, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const Combine = () => {
    const [isSmallerThan768] = useMediaQuery('(min-width: 767px)');
    return (
        <>
            {isSmallerThan768
                ?
                <Center my={'80px'}>
                    <Box width={'80%'}>
                        <Flex gap={'10px'}>
                            <Box width={'100%'}>
                                <Image src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/Cms-5.jpg' m={'auto'} />
                                <Box textAlign={'center'}>
                                    <Heading my={'3'} fontSize={'34px'} fontWeight={'semibold'}>Shopping Gadgets</Heading>
                                    <Text maxW={'300px'} mx={'auto'} fontSize={'16px'} color={'GrayText'}>Contrary to popular belief, Lorem Ipsum is not simply dummy text.
                                        It roots in a piece of classical Latin literature45 BC,
                                        making it ov 2000 years old. dummy text
                                    </Text>
                                    <Button my={'5'} bg={'#f7d929'} transition={'all .5s ease'} borderRadius={'20px'} _hover={{ bg: '#222', color: '#FFF' }}>SHOP NOW</Button>
                                </Box>
                            </Box>
                            <Box width={'100%'}>
                                <Image src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/Cms-6.jpg' m={'auto'} />
                                <Box textAlign={'center'}>
                                    <Heading my={'3'} fontSize={'34px'} fontWeight={'semibold'}>Discount On Tables</Heading>
                                    <Text maxW={'300px'} mx={'auto'} fontSize={'16px'} color={'GrayText'}>Contrary to popular belief, Lorem Ipsum is not simply dummy text.
                                        It roots in a piece of classical Latin literature45 BC,
                                        making it ov 2000 years old. dummy text
                                    </Text>
                                    <Button my={'5'} bg={'#f7d929'} transition={'all .5s ease'} borderRadius={'20px'} _hover={{ bg: '#222', color: '#FFF' }}>SHOP NOW</Button>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </Center>
                :
                <Center my={'80px'}>
                    <Box width={'80%'}>
                        <Flex gap={'10px'} flexDirection={'column'}>
                            <Box width={'100%'}>
                                <Image src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/Cms-5.jpg' m={'auto'} />
                                <Box textAlign={'center'}>
                                    <Heading my={'3'} fontSize={'34px'} fontWeight={'semibold'}>Shopping Gadgets</Heading>
                                    <Text maxW={'300px'} mx={'auto'} fontSize={'16px'} color={'GrayText'}>Contrary to popular belief, Lorem Ipsum is not simply dummy text.
                                        It roots in a piece of classical Latin literature45 BC,
                                        making it ov 2000 years old. dummy text
                                    </Text>
                                    <Button my={'5'} bg={'#f7d929'} transition={'all .5s ease'} borderRadius={'20px'} _hover={{ bg: '#222', color: '#FFF' }}>SHOP NOW</Button>
                                </Box>
                            </Box>
                            <Box width={'100%'}>
                                <Image src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/Cms-6.jpg' m={'auto'} />
                                <Box textAlign={'center'}>
                                    <Heading my={'3'} fontSize={'34px'} fontWeight={'semibold'}>Discount On Tables</Heading>
                                    <Text maxW={'300px'} mx={'auto'} fontSize={'16px'} color={'GrayText'}>Contrary to popular belief, Lorem Ipsum is not simply dummy text.
                                        It roots in a piece of classical Latin literature45 BC,
                                        making it ov 2000 years old. dummy text
                                    </Text>
                                    <Button my={'5'} bg={'#f7d929'} transition={'all .5s ease'} borderRadius={'20px'} _hover={{ bg: '#222', color: '#FFF' }}>SHOP NOW</Button>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </Center>
            }
        </>
    )
}

export default Combine