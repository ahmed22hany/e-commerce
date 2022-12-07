import React from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import Router, { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Link from 'next/link';
import ProductNoSlider from './ProductNoSlider';


const productswithtwopages = () => {
    const values = useSelector((state: RootState) => state.categories.data);
    const router = useRouter()
    const { id } = router.query as { id: string };
    const found = values.find((item) => item.id === Number(id));
    return (
        <>
            <Flex gap={'2'} alignItems={'flex-end'} width={'98%'} justifyContent={'flex-end'}>
                <Box fontWeight={'semibold'}><Button><Link href={'/products/' + found?.id}> 1 </Link></Button></Box>
                <Box fontWeight={'semibold'}><Button><Link href={'/products/' + found?.id}> 2 </Link></Button></Box>
            </Flex>
        </>
    )
}

export default productswithtwopages