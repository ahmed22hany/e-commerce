import React, { Component } from "react";
import Slider from "../slider";

interface HeroimageUser {
    props: string
    id: string
}

const Heroimage = (props: HeroimageUser) => {
    return (
        <div>
            <img src={props.id} />
        </div>
    );
};

const images = [
    { id: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/Main-Banner-2-1800x560.jpg" },
    { id: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/Main-Banner-1-1800x560.jpg" }
]

export default function SimpleSlider() {
    return (
        <div>
            <Slider settings={{ slidesToShow: 1, slidesToScroll: 1 }}>
                {images.map((image) => (
                    <div key={image.id}>
                        <Heroimage id={image.id} props={''} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}