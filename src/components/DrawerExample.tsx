import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Button, Input, Box } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'


function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const values = useSelector((state: RootState) => state.categories.data);


  return (
    <>
      <GiHamburgerMenu onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >

        <DrawerOverlay />
        <DrawerContent>

          <DrawerHeader bg={'#f7d929'} position={'relative'} height={'100%'}>SHOP BY CATEGORY
            <DrawerCloseButton position={'absolute'} top={'15px'} />
          </DrawerHeader>

          <DrawerBody>
            {values.map((value) => {
              return (
                <Box my={'2'} py={'2'} _notLast={{ borderBottom: '1px solid #ccc' }} key={value.id}><Link href={'/products/' + value.id}>{value.name}</Link></Box>
              )
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerExample