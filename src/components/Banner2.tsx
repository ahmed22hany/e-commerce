import React from 'react'
import { Box, Flex, Center } from '@chakra-ui/react'
import Router, { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../src/redux/store';
import { AiOutlineHome } from 'react-icons/ai'
import { TfiAngleDoubleRight } from 'react-icons/tfi'
import Link from 'next/link';


const Banner2 = () => {
    const values = useSelector((state: RootState) => state.categories.data);
    const router = useRouter()
    const { id } = router.query as { id: string };
    const found = values.find((item) => item.id === Number(id));
    return (
        <Box bg={'#f2f2f2'} py={'10'}>
            <Center>
                <Flex flexDirection={'column'} gap={'2'}>
                    <Box fontSize={'36px'} fontWeight={'semibold'}>Category: {found?.name} </Box>
                    <Box>
                        <Center>
                            <Flex alignItems={'center'} gap={'2'}>
                                <Box fontSize={'20px'}><Link href={'/'}>  <AiOutlineHome /></Link> </Box>
                                <Box fontSize={'14px'}>  <TfiAngleDoubleRight /></Box>
                                <Box fontWeight={'semibold'}> <Link href={'/products/' + found?.id}>  {found?.name} </Link> </Box>
                            </Flex>
                        </Center>
                    </Box>
                </Flex>
            </Center>
        </Box>
    )
}

export default Banner2