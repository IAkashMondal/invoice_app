import React from 'react'
import '../css/style.css';
import {
    Box, Text, HStack, VStack, 
} from "@chakra-ui/react"
import Decription from './Decription';
const BillTemplate = () => {
    return (

        <Box color={"black"} maxW="8.27in" h="11.69in" bg="white" boxShadow="lg">
            <Text textAlign={"center"} mb={"-1.7cm"}>Tax Invoice</Text>
            <Box border={"1px solid black"} maxW="17.2cm" h="22.6cm" mx={'2cm'} mt={"1.7cm"} mb={"5cm"}>
                <HStack gap={0}>
                    <Box className='Box-1' >
                        <Box className='Box-1-Child-1'>1</Box>
                        <Box className='Box-1-Child-2'>2</Box>
                        <Box className='Box-1-Child-3'>3</Box>
                    </Box>
                    <Box className="Box-2" >
                        <HStack gap={0}>
                            <VStack gap={0}className=''>
                                <Box className='Box-2-A'><Text>a</Text></Box>
                                <Box className='Box-2-A'><Text>b</Text></Box>
                                <Box className='Box-2-A'><Text>c</Text></Box>
                                <Box className='Box-2-A'><Text>d</Text></Box>
                                <Box className='Box-2-A'><Text>e</Text></Box>
                                <Box className='Box-2-A'><Text>f</Text></Box>
                                <Box className='Box-2-A'><Text>g</Text></Box>
                            </VStack>
                            <VStack gap={0}>
                                <Box className='Box-2-B'><Text>h</Text></Box>
                                <Box className='Box-2-B'><Text>i</Text></Box>
                                <Box className='Box-2-B'><Text>j</Text></Box>
                                <Box className='Box-2-B'><Text>k</Text></Box>
                                <Box className='Box-2-B'><Text>l</Text></Box>
                                <Box className='Box-2-B'><Text>m</Text></Box>
                                <Box className='Box-2-B'><Text>n</Text></Box>
                            </VStack>
                        </HStack>
                        <Box>
                            <Text>Terms of Delivery</Text>
                        </Box>
                    </Box>
                </HStack>
                {/* DEscription------------------------------------------------------------------------------------------? */}
                <Decription/>
            </Box>
        </Box>

    )
}

export default BillTemplate