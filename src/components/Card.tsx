import React from "react";
import {
    Box,
    Image,
    Text,
    Link,
    Stack
} from "@chakra-ui/react";


interface Cardprops {
    image: string
    product: string
    summary: string
    longLine: string
}

function Card(props: Cardprops) {
    const { product, summary, longLine, image } = props;

    return (
        <Box
            px={'30px'}
            py={'15px'}
            display={"flex"}
            flexDirection={'column'}
            width={'266px'}
            borderWidth={1}
            margin={2}
        >
            <Image
                maxWidth={'200px'}
                margin={'auto'}
                src={image}
                alt="product"
            />
            <Stack
                align={{ base: "center", md: "stretch" }}
                textAlign={{ base: "center", md: "left" }}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
            >
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="lg"
                    letterSpacing="wide"
                    color="teal.600"
                >
                    {product}
                </Text>
                <Link
                    my={1}
                    display="block"
                    fontSize="md"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="#"
                >
                    {summary}
                </Link>
                <Text my={2} color="gray.500">
                    {longLine}
                </Text>
            </Stack>
        </Box>
    );
}

export default Card;
