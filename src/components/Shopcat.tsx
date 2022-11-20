import React from 'react'
import { IoShirtOutline } from 'react-icons/io5'
import { Box, Link, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react'
import { SlScreenDesktop } from 'react-icons/sl'
import { TbArmchair } from 'react-icons/tb'
import { MdMotionPhotosAuto } from 'react-icons/md'
import { GiCookingPot } from 'react-icons/gi'
import { RiBearSmileFill } from 'react-icons/ri'
import ProductNoSlider from './ProductNoSlider'


const Shopcat = () => {
    return (
        <Tabs variant='enclosed'>
            <Box bg={'#f7d929'} pt={'3'} my={'3'} border={'none'} width={'100%'}>
                <Center>
                    <TabList border={'none'}>
                        <Tab flexDirection={'column'} mx={'3'} _hover={{ bg: '#FFF' }} _selected={{ bg: '#FFF' }} fontSize={'50px'} >
                            <IoShirtOutline />
                            <Box fontSize={'12px'} fontWeight={'bold'} my={'2'}>GADGETS</Box>
                        </Tab>
                        <Tab flexDirection={'column'} mx={'3'} _hover={{ bg: '#FFF' }} _selected={{ bg: '#FFF' }} fontSize={'50px'}>
                            <SlScreenDesktop />
                            <Box fontSize={'12px'} fontWeight={'bold'} my={'2'}>GROCERY</Box>
                        </Tab>
                        <Tab flexDirection={'column'} mx={'3'} _hover={{ bg: '#FFF' }} _selected={{ bg: '#FFF' }} fontSize={'50px'}>
                            <TbArmchair />
                            <Box fontSize={'12px'} fontWeight={'bold'} my={'2'}>APPLIANCES</Box>
                        </Tab>
                        <Tab flexDirection={'column'} mx={'3'} _hover={{ bg: '#FFF' }} _selected={{ bg: '#FFF' }} fontSize={'50px'}>
                            <MdMotionPhotosAuto />
                            <Box fontSize={'12px'} fontWeight={'bold'} my={'2'}>AUTOPARTS</Box>
                        </Tab>
                        <Tab flexDirection={'column'} mx={'3'} _hover={{ bg: '#FFF' }} _selected={{ bg: '#FFF' }} fontSize={'50px'}>
                            <GiCookingPot />
                            <Box fontSize={'12px'} fontWeight={'bold'} my={'2'}>FASHION</Box>
                        </Tab>
                        <Tab flexDirection={'column'} mx={'3'} _hover={{ bg: '#FFF' }} _selected={{ bg: '#FFF' }} fontSize={'50px'}>
                            <RiBearSmileFill />
                            <Box fontSize={'12px'} fontWeight={'bold'} my={'2'}>FURNITURE</Box>
                        </Tab>
                    </TabList>
                </Center>
            </Box>
            <TabPanels>
                <TabPanel p={'0'}>
                    <ProductNoSlider />
                </TabPanel>
                <TabPanel p={'0'}>
                    <ProductNoSlider />
                </TabPanel>
                <TabPanel p={'0'}>
                    <ProductNoSlider />
                </TabPanel>
                <TabPanel p={'0'}>
                    <ProductNoSlider />
                </TabPanel>
                <TabPanel p={'0'}>
                    <ProductNoSlider />
                </TabPanel>
                <TabPanel p={'0'}>
                    <ProductNoSlider />
                </TabPanel>
            </TabPanels>

        </Tabs >
    )
}

export default Shopcat