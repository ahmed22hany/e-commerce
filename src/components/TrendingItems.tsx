import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import SmallCard from './SmallCard'

const trenditems = [
    {
        id: "1",
        image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/6-254x209.jpg",
        product: "Trans Color Wool Sweater Glass Decore",
        feedback: "",
        price: 126.00,
        hover: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/7-254x209.jpg"
    },
    {
        id: "2",
        image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/7-254x209.jpg",
        product: "Trans Color Wool Sweater Glass Decore",
        feedback: "",
        price: 126.00,
        hover: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/18-254x209.jpg"
    },
    {
        id: "3",
        image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/8-254x209.jpg",
        product: "Trans Color Wool Sweater Glass Decore",
        feedback: "",
        price: 126.00,
        hover: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/11-254x209.jpg"
    },
]

const TrendingItems = () => {
    return (
        <Box borderBottom={'1px solid #CCC'} py={'4'}>
            <Text fontSize={'16px'} fontWeight={'bold'} my={'2'}>Trending Items</Text>
            {
                trenditems.map(function (data) {
                    return (
                        <div key={data.id}>
                            <SmallCard {...data} />
                        </div>
                    );
                })
            }
        </Box>
    )
}

export default TrendingItems