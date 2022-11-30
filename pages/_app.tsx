import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { setCategoriesAction } from '../src/redux/categories'
import { useDispatch } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const category = [{
  name: 'Grecory',
  id: 1
}, {
  name: 'Kids',
  id: 2
}, {
  name: 'Fashion',
  id: 3
}, {
  name: 'Gadgets',
  id: 4
}, {
  name: 'Electronics',
  id: 5
}, {
  name: 'Appliances',
  id: 6
}, {
  name: 'AutoParts',
  id: 7
}, {
  name: 'Kitchen',
  id: 8
}, {
  name: 'Books',
  id: 9
}, {
  name: 'Baby Products',
  id: 10
}, {
  name: 'Furniture',
  id: 11
}, {
  name: 'Tool',
  id: 12
}, {
  name: 'Bag Pack',
  id: 13
}, {
  name: 'Sports and Fitness',
  id: 14
}, {
  name: 'Beauty Products',
  id: 15
}];

const Categories = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCategoriesAction(category))
  }, [])

  return null
}

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider>
      <Provider store={store}>
        <Categories />
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}
