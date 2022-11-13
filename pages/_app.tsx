import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { setCategoriesAction } from '../src/redux/categories'
import { useDispatch } from 'react-redux'

const category = ['Grecory', 'Kids', 'Fashion', 'Gadgets', 'Electronics', 'Appliances', 'AutoParts', 'Kitchen', 'Books', 'Baby Products', 'Furniture', 'Tool', 'Bag Pack', 'Sports and Fitness', 'Beauty Products'];

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
