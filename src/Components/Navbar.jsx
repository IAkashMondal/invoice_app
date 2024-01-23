import React from 'react'
import { Box, Tabs, TabList, Tab, TabPanel, TabPanels, HStack } from '@chakra-ui/react'
import { GstBill } from '../Page/GsyBill'
import OrderHistory from '../Page/OrderHistory'
import Profile from './Profile'
import InvoiceBuilder from './InvoiceBuilder'
import { MainFrom } from '../test/MainFrom'


const Navbar = () => {
    return (
        <Box w='100%' color='white'>
            <HStack ><Box w="95%">
                <Tabs isFitted variant='enclosed' p={0} mt={4}>
                    <TabList >
                        <Tab _selected={{ color: 'white', bg: '#012a4a' }}>GST Bill</Tab>
                        <Tab _selected={{ color: '#014f86', bg: 'black' }}>ORDER HISTORY</Tab>
                        <Tab _selected={{ color: '#89c2d9', bg: 'black' }}>There</Tab>

                    </TabList>
                    <TabPanels p={0}>
                        <TabPanel m={0} p={0}>
                            <GstBill />
                        </TabPanel >
                        <TabPanel _active={{ color: '#89c2d9', }} p={0} m={0}>
                            <OrderHistory />
                        </TabPanel>
                        <TabPanel>
                            <MainFrom/>
                        </TabPanel>
                        <TabPanel>
                            <Profile />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
                {/* <Box><Profile /></Box> */}


            </HStack>

        </Box>
    )
}

export default Navbar
