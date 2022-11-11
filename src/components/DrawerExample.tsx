import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Button, Input, Link, Box } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
const values = ['Grecory', 'Kids', 'Fashion', 'Gadgets', 'Electronics', 'Appliances', 'AutoParts', 'Kitchen', 'Books', 'Baby Products', 'Furniture', 'Tool', 'Bag Pack', 'Sports and Fitness', 'Beauty Products'];

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
                <Box my={'2'} py={'2'} _notLast={{ borderBottom: '1px solid #ccc' }} key={value}><Link>{value}</Link></Box>
              )
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerExample