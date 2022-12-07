import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'
import { useEffect, useState } from 'react'
import { setCategoriesAction } from '../src/redux/categories'
import { useDispatch } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { db } from '../src/utils/firebase'
import { getDocs, collection } from 'firebase/firestore'


const category = [{
  name: 'Grecory',
  id: 1,
  attribute: ['Bakery and Bread', 'Froozen Foods', 'Dairy Products', 'Snacks and Crackers']
}, {
  name: 'Kids',
  id: 2,
  attribute: ['Kids Toy', 'Kids Fishon']
}, {
  name: 'Fashion',
  id: 3,
  attribute: ['Accessisors', 'Eyeliner']
}, {
  name: 'Gadgets',
  id: 4,
  attribute: ['Mobile Phones', 'Monitors', 'Printers', 'Scanners', 'Web Camera']
}, {
  name: 'Electronics',
  id: 5,
  attribute: null
}, {
  name: 'Appliances',
  id: 6,
  attribute: null
}, {
  name: 'AutoParts',
  id: 7,
  attribute: null
}, {
  name: 'Kitchen',
  id: 8,
  attribute: null
}, {
  name: 'Books',
  id: 9,
  attribute: null
}, {
  name: 'Baby Products',
  id: 10,
  attribute: null
}, {
  name: 'Furniture',
  id: 11,
  attribute: null
}, {
  name: 'Tool',
  id: 12,
  attribute: null
}, {
  name: 'Bag Pack',
  id: 13,
  attribute: null
}, {
  name: 'Sports and Fitness',
  id: 14,
  attribute: null
}, {
  name: 'Beauty Products',
  id: 15,
  attribute: null
}];



const Categories = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCategoriesAction(category))
  }, [])

  return null
}

export default function App({ Component, pageProps }: AppProps) {
  const colRef = collection(db, "products");
  useEffect(() => {
    const getData = async () => {
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach(doc => {
        console.log(doc.data());
      })
    };
    getData()
  }, [])

  return (
    <ChakraProvider>
      <Provider store={store}>
        <Categories />
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}
function getData() {
  throw new Error('Function not implemented.')
}

