import React from 'react'
import { Box } from '@chakra-ui/react'
import Card from './Card'

const Product = () => {
    const dataList = [
        {
            id: "1",
            product: "Product 1",
            summary: "This is a summary, can be any length",
            longLine: "Very short, can be any description",
            image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/11-254x209.jpg"
        },
        {
            id: "2",
            product: "Product Two",
            summary:
                "Another summary, make sure that this is very responsivesfafsdfsdfsdfsdfsfsfsdf",
            longLine: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos",
            image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/15-254x209.jpg"
        },
        {
            id: "3",
            product: "Product Two",
            summary:
                "Another summary, make sure that this is very responsivesfafsdfsdfsdfsdfsfsfsdf",
            longLine: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos",
            image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/6-254x209.jpg"
        },
        {
            id: "4",
            product: "Product Two",
            summary:
                "Another summary, make sure that this is very responsivesfafsdfsdfsdfsdfsfsfsdf",
            longLine: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos",
            image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/8-254x209.jpg"
        },
        {
            id: "5",
            product: "Product Two",
            summary:
                "Another summary, make sure that this is very responsivesfafsdfsdfsdfsdfsfsfsdf",
            longLine: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos",
            image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/20-254x209.jpg"
        },
        {
            id: "6",
            product: "Long Product",
            summary: "Finalize them summary, hurry, we are close to deadline",
            longLine: "Wow, this is very descriptive! I wonder how long it is",
            image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/2-254x209.jpg"
        },
        {
            id: "7",
            product: "Long Product",
            summary: "Finalize them summary, hurry, we are close to deadline",
            longLine: "Wow, this is very descriptive! I wonder how long it is",
            image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/2-254x209.jpg"
        }, {
            id: "8",
            product: "Long Product",
            summary: "Finalize them summary, hurry, we are close to deadline",
            longLine: "Wow, this is very descriptive! I wonder how long it is",
            image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/2-254x209.jpg"
        },
        {
            id: "9",
            product: "Long Product",
            summary: "Finalize them summary, hurry, we are close to deadline",
            longLine: "Wow, this is very descriptive! I wonder how long it is",
            image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/2-254x209.jpg"
        },
        {
            id: "10",
            product: "Long Product",
            summary: "Finalize them summary, hurry, we are close to deadline",
            longLine: "Wow, this is very descriptive! I wonder how long it is",
            image: "https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/cache/catalog/2-254x209.jpg"
        }
    ];
    return (
        <Box display={"flex"}>
            {dataList.map(function (data) {
                const { id, product, summary, longLine, image } = data;
                return (
                    <Card
                        key={id}
                        image={image}
                        product={product}
                        summary={summary}
                        longLine={longLine}
                    />
                );
            })}
        </Box>
    )
}

export default Product