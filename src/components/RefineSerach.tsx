import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router';
import { RootState } from '../../src/redux/store';
import Link from 'next/link';



const RefineSerach = () => {
    const CategoryValues = useSelector((state: RootState) => state.categories.data);
    const router = useRouter()
    const { id } = router.query as { id: string };
    const Selectcategory = CategoryValues.find((item) => item.id === Number(id));
    let arrSelectCat = [Selectcategory?.attribute];
    let itemsOfarrSelect = arrSelectCat[0];
    console.log(itemsOfarrSelect)

    return (
        <>
            {Selectcategory?.attribute
                ? <Text>Refine Search</Text>
                : null
            }

            <Box>
                <Box fontWeight={'semibold'}>
                    {itemsOfarrSelect?.map((categ) => (
                        <Button me={'2'} borderRadius={'none'} bg={'transparent'} border={'1px solid #CCC'} _hover={{ bg: 'transparent', borderColor: '#f7d929' }}>
                            <Link href={`/products/${Selectcategory?.id}`}> {categ} </Link>
                        </Button>
                    )
                    )}
                </Box>
            </Box>
        </>
    )
}

export default RefineSerach