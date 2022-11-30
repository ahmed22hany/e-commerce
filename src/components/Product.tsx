import React, { useState } from 'react'
import { Box, useMediaQuery } from '@chakra-ui/react'
import Card from './Card'
import Slider from "../slider";



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

const Product = () => {
    const [isLargerthan1440, isSmallerThan1440, isSmallerThan1024, isSmallerThan768, isSmallerThan507] = useMediaQuery(['(max-width: 1441px)', '(max-width: 1025px)', '(max-width: 1023px)', '(max-width: 768px)', '(max-width: 507px)'])

    if (isSmallerThan507) {
        return (
            <Box display={"flex"}>
                <Slider settings={{ slidesToShow: 1, slideToScroll: 1, dots: false }} >
                    {
                        dataList.map(function (data) {
                            return (
                                <div key={data.id}>
                                    <Card {...data} />
                                </div>
                            );
                        })
                    }
                </Slider>
            </Box>
        )
    }


    if (isSmallerThan768) {
        return (
            <Box display={"flex"}>
                <Slider settings={{ slidesToShow: 2, slideToScroll: 1, dots: false }} >
                    {
                        dataList.map(function (data) {
                            return (
                                <div key={data.id}>
                                    <Card {...data} />
                                </div>
                            );
                        })
                    }
                </Slider>
            </Box>
        )
    }

    if (isSmallerThan1024) {
        return (
            <Box display={"flex"}>
                <Slider settings={{ slidesToShow: 3, slideToScroll: 1, dots: false }} >
                    {
                        dataList.map(function (data) {
                            return (
                                <div key={data.id}>
                                    <Card {...data} />
                                </div>
                            );
                        })
                    }
                </Slider>
            </Box>
        )
    }

    if (isSmallerThan1440) {
        return (
            <Box display={"flex"}>
                <Slider settings={{ slidesToShow: 4, slideToScroll: 1, dots: false }} >
                    {
                        dataList.map(function (data) {
                            return (
                                <div key={data.id}>
                                    <Card {...data} />
                                </div>
                            );
                        })
                    }
                </Slider>
            </Box>
        )
    }

    if (isLargerthan1440) {
        return (
            <Box display={"flex"}>
                <Slider settings={{ slidesToShow: 5, slideToScroll: 1, dots: false }} >
                    {
                        dataList.map(function (data) {
                            return (
                                <div key={data.id}>
                                    <Card {...data} />
                                </div>
                            );
                        })
                    }
                </Slider>
            </Box>
        )
    }


    return (
        <>
            {isSmallerThan507}
            {isSmallerThan768}
            {isSmallerThan1024}
            {isSmallerThan1440}
            {isLargerthan1440}

        </>
    )
}

export default Product