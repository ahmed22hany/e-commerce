import React from 'react'
import Fullscreen from '../../src/layout/Fullscreen';
import ProductListing from '../../src/screens/ProductListing';


const CategoryPage = () => {

    return (
        <>
            <Fullscreen>
                <ProductListing />
            </Fullscreen>
        </>
    )
}

export default CategoryPage