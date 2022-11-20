import React from 'react'
import { Box } from '@chakra-ui/react'
import Card from './Card'

const dataList = [
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
    {
        id: "4",
        image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/11-254x209.jpg",
        product: "Trans Color Wool Sweater Glass Decore",
        feedback: "",
        price: 126.00,
        hover: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/8-254x209.jpg"
    },
    {
        id: "5",
        image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/13-254x209.jpg",
        product: "Trans Color Wool Sweater Glass Decore",
        feedback: "",
        price: 126.00,
        hover: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/11-254x209.jpg",
    },
    {
        id: "6",
        image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/2-254x209.jpg",
        product: "Trans Color Wool Sweater Glass Decore",
        feedback: "",
        price: 126.00,
        hover: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/11-254x209.jpg"
    },
    {
        id: "7",
        image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/2-254x209.jpg",
        product: "Trans Color Wool Sweater Glass Decore",
        feedback: "",
        price: 126.00,
        hover: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/11-254x209.jpg"
    }, {
        id: "8",
        image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/2-254x209.jpg",
        product: "Trans Color Wool Sweater Glass Decore",
        feedback: "",
        price: 126.00,
        hover: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/11-254x209.jpg"
    },
    {
        id: "9",
        image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/2-254x209.jpg",
        product: "Trans Color Wool Sweater Glass Decore",
        feedback: "",
        price: 126.00,
        hover: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/11-254x209.jpg"
    },
    {
        id: "10",
        image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/2-254x209.jpg",
        product: "Trans Color Wool Sweater Glass Decore",
        feedback: "",
        price: 126.00,
        hover: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/11-254x209.jpg"
    }
];

const ProductNoSlider = () => {
    return (
        <Box display={"flex"} flexWrap={'wrap'}>
            {
                dataList.map(function (data) {
                    return (
                        <div key={data.id}>
                            <Card {...data} />
                        </div>
                    );
                })
            }
        </Box>
    )
}

export default ProductNoSlider