import React, { useEffect } from 'react'
import Fullscreen from '../../src/layout/Fullscreen';
import ProductListing from '../../src/screens/ProductListing';




const CategoryPage = (props: any) => {
    return (
        <Fullscreen>
            <ProductListing />
        </Fullscreen>
    )
}


export default CategoryPage