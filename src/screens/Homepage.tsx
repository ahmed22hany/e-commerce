import React from 'react'
import { Box, Badge, Text, Center, Image, Flex, Button, Link } from '@chakra-ui/react';
import Slider from "../components/Slider";
import { FiTruck } from 'react-icons/fi'
import { BiMessageDetail } from 'react-icons/bi'
import { RiSecurePaymentLine } from 'react-icons/ri'
import Card from '../components/Card'


const pargraph = 'Contrary popular belief Lorem Ipsu not simply random tex';



const Homepage = () => {
    const dataList = [
        {
            id: "1",
            product: "Product 1",
            summary: "This is a summary, can be any length",
            longLine: "Very short, can be any description"
        },
        {
            id: "2",
            product: "Product Two",
            summary:
                "Another summary, make sure that this is very responsivesfafsdfsdfsdfsdfsfsfsdf",
            longLine: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos"
        },
        {
            id: "3",
            product: "Long Product",
            summary: "Finalize them summary, hurry, we are close to deadline",
            longLine: "Wow, this is very descriptive! I wonder how long it is"
        }
    ];
    return (
        <>

            <Box p={'4'} bg={'#F5F5F5'}>
                <Center >
                    <Flex alignItems={'center'}>
                        <Badge mx={'10px'} bg={'blue.600'} color={'#FFF'}>OFFER</Badge>
                        <Text><b>Need It Today?</b> Free In Store & Pickup / <b>$9.99</b> Same Day Delivery</Text>
                    </Flex>
                </Center>
            </Box>

            <Box>
                <Slider />
            </Box>

            <Box px={'100px'} pb={'50px'} borderBottom={'1px solid #ccc'}>
                <Flex>
                    {/* how to reduce it and thanks */}
                    <Box width={'100%'} py={'60px'} _hover={{ bg: '#f0f0f0', transition: 'all .5s ease-in-out' }}>
                        <Center flexDirection={'column'}>
                            <Box py={'1.5'}><FiTruck color={'#f7d929'} fontSize={'50px'} /></Box>
                            <Text py={'1.5'} fontSize={'16px'} fontWeight={'700'}>FAST FREE DELIVERY</Text>
                            <Text color={'gray'} py={'1.5'} textAlign={'center'} maxW={'250px'}>{pargraph}</Text>
                            <Link textDecoration={'underline'} fontWeight={'600'} py={'1.5'}>Read More</Link>
                        </Center>
                    </Box>

                    <Box width={'100%'} py={'60px'} _hover={{ bg: '#f0f0f0', transition: 'all .5s ease-in-out' }}>
                        <Center flexDirection={'column'}>
                            <Box py={'1.5'}><BiMessageDetail color={'#f7d929'} fontSize={'50px'} /></Box>
                            <Text py={'1.5'} fontSize={'16px'} fontWeight={'700'}>ONLINE 24/7 SUPPORTS</Text>
                            <Text color={'gray'} py={'1.5'} textAlign={'center'} maxW={'250px'}>{pargraph}</Text>
                            <Link textDecoration={'underline'} fontWeight={'600'} py={'1.5'}>Read More</Link>
                        </Center>
                    </Box>

                    <Box width={'100%'} py={'60px'} _hover={{ bg: '#f0f0f0', transition: 'all .5s ease-in-out' }}>
                        <Center flexDirection={'column'}>
                            <Box py={'1.5'}><RiSecurePaymentLine color={'#f7d929'} fontSize={'50px'} /></Box>
                            <Text py={'1.5'} fontSize={'16px'} fontWeight={'700'}>100% SECURE PAYMENT</Text>
                            <Text color={'gray'} py={'1.5'} textAlign={'center'} maxW={'250px'}>{pargraph}</Text>
                            <Link textDecoration={'underline'} fontWeight={'600'} py={'1.5'}>Read More</Link>
                        </Center>
                    </Box>

                </Flex>
            </Box>


            <Box>
                {dataList.map(function (data) {
                    const { id, product, summary, longLine } = data;
                    return (
                        <Card
                            key={id}
                            product={product}
                            summary={summary}
                            longLine={longLine}
                        />
                    );
                })}
            </Box>
        </>
    )
}

export default Homepage