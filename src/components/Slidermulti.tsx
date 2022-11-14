import React, { Component } from "react";
import { Box, Flex } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Product from "./Product";


export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        };
        return (
            <Box>
                <Slider>
                    <Product />
                </Slider>
            </Box>
        )
    }
}