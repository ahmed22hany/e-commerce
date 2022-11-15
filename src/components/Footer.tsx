import React from 'react'
import { Button, Box, Flex, Image, Center, Menu, MenuButton, MenuList, MenuItem, Input, ListItem, Link, Text, Heading, UnorderedList } from '@chakra-ui/react'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { GrFacebookOption, GrTwitter, GrInstagram, GrYoutube, GrPinterest } from 'react-icons/gr'
import { FaAngleRight } from 'react-icons/fa'


const information = ['About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Search', 'Cart', 'Newsteller', 'Specials'];
const customer = ['Specials', 'Return', 'Site map', 'Brands', 'Gift Certifications', 'Downlods', 'Transaction', 'Blogs'];
const account = ['My account', 'Order History', 'Wishlist', 'Compare', 'Checkout', 'Cart'];
interface FooterLinksProps {
    links: string[]
    header: string
}

const FooterLinks = (props: FooterLinksProps) => {
    const { links, header } = props;
    return (
        <Box width={'100%'}>
            <Heading as='h5' fontSize={'lg'} my={'3'}>{header}</Heading>
            {links.map((value) => {
                return (
                    <UnorderedList m={'0'}>
                        <Box cursor={'pointer'} transition={'all .3s ease'} width={'fit-content'} _hover={{ color: '#bbb' }}>
                            <Flex alignItems={'center'} height={'100%'}>
                                <FaAngleRight />
                                <ListItem my={'1.5'} ms={'1'} listStyleType={'none'}>{value}</ListItem>
                            </Flex>
                        </Box>
                    </UnorderedList>
                )
            })}
        </Box>
    )
}

const Footer = () => {
    return (
        <>

            <Box bg={'#f7d929'} p={'5'} width={'100%'}>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Box >
                        <Flex alignItems={'center'}>
                            <SlEnvolopeLetter fontSize={'35px'} />
                            <Box ms={'6'}>
                                <Heading as='h4' size='md'>Subscribe To Our Newsletter</Heading>
                                <Text>Get all the latest information on Events, Sales and Offers. </Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box >
                        <Input _focus={{ border: 'none', outline: 'none', boxShadow: 'none' }} type={'email'} placeholder={'Your Email Address'} bg={'#FFF'} border={'none'} borderLeftRadius={'20px'} borderRightRadius={'20px'} width={'600px'} />
                    </Box>
                    <Box>
                        <Button _hover={{ bg: '#FFF', color: 'black', transition: 'all .5s ease-in' }} bg={'black'} color={'#FFF'} borderLeftRadius={'20px'} borderRightRadius={'20px'} width={'150px'}>Subscribe</Button>
                    </Box>
                </Flex>
            </Box>
            <Box py={'50px'} borderBottom={'1px solid #CCC'}>
                <Flex justifyContent={'space-around'}>



                    <FooterLinks header='Information' links={information} />
                    <FooterLinks header='Customer Service' links={customer} />
                    <FooterLinks header='My Account' links={account} />

                    <Box width={'100%'} position={'relative'} bgGradient={'linear(180deg,#f0f0f0 10%,#FFF 60%)'} me={'4'}>
                        <Center>
                            <Image p={'30px'} src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/catalog/view/theme/OPC100247_1/image/megnor/contact-bg.png' />
                        </Center>

                        <Box position={'absolute'} top={'0'} p={'30px'}>
                            <Image py={'15px'} src='https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/Logo.png' />
                            <Text pb={'15px'}>
                                60, 29th Street, San Francisco, CA 94110, United States of America
                            </Text>
                            <Text pb={'15px'}><Link >demo@example.com</Link></Text>
                            <Text fontSize={'25px'} pb={'50px'}>(+1) 1234 4567 890</Text>
                            <Box>
                                <Text fontSize={'20px'}>Follow Us</Text>
                                <Box mt={'2'}>
                                    <Flex>
                                        <Box _hover={{ bg: '#f7d929' }} transition={'all .5s ease-in'} cursor={'pointer'} width={'40px'} bg={'#f0f0f0'} height={'40px'} borderRadius={'50%'} me={'1.5'} position={'relative'}>
                                            <Center alignItems={'center'} position={'absolute'} height={'100%'} width={'100%'}>
                                                <Link><GrFacebookOption /></Link>
                                            </Center>
                                        </Box>
                                        <Box _hover={{ bg: '#f7d929' }} transition={'all .5s ease-in'} cursor={'pointer'} width={'40px'} bg={'#f0f0f0'} height={'40px'} borderRadius={'50%'} me={'1.5'} position={'relative'}>
                                            <Center alignItems={'center'} position={'absolute'} height={'100%'} width={'100%'}>
                                                <Link><GrTwitter /></Link>
                                            </Center>
                                        </Box>
                                        <Box _hover={{ bg: '#f7d929' }} transition={'all .5s ease-in'} cursor={'pointer'} width={'40px'} bg={'#f0f0f0'} height={'40px'} borderRadius={'50%'} me={'1.5'} position={'relative'}>
                                            <Center alignItems={'center'} position={'absolute'} height={'100%'} width={'100%'}>
                                                <Link><GrInstagram /></Link>
                                            </Center>
                                        </Box>
                                        <Box _hover={{ bg: '#f7d929' }} transition={'all .5s ease-in'} cursor={'pointer'} width={'40px'} bg={'#f0f0f0'} height={'40px'} borderRadius={'50%'} me={'1.5'} position={'relative'}>
                                            <Center alignItems={'center'} position={'absolute'} height={'100%'} width={'100%'}>
                                                <Link><GrYoutube /></Link>
                                            </Center>
                                        </Box>
                                        <Box _hover={{ bg: '#f7d929' }} transition={'all .5s ease-in'} cursor={'pointer'} width={'40px'} bg={'#f0f0f0'} height={'40px'} borderRadius={'50%'} me={'1.5'} position={'relative'}>
                                            <Center alignItems={'center'} position={'absolute'} height={'100%'} width={'100%'}>
                                                <Link><GrPinterest /></Link>
                                            </Center>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>

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
        </>
    )
}

export default Footer