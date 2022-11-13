import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src="https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/Main-Banner-2-1800x560.jpg" />
                    </div>
                    <div>
                        <img src="https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/Main-Banner-1-1800x560.jpg" />
                    </div>
                </Slider>
            </div>
        );
    }
}