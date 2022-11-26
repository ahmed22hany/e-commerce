import React from "react";
import Slider from "react-slick";

const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
};

export default function MultipleItems(props) {
    const { settings, children } = props;

    const sliderSettings = {
        ...defaultSettings,
        ...settings
    };

    return <Slider {...sliderSettings}>{children}</Slider>;
}
