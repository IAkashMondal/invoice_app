import React from 'react'
import { HStack, Text, VStack, Box, Grid, GridItem } from "@chakra-ui/react";
import "../css/style.css"
const Decription = () => {
    return (
        <Box p={0} m={0}>
            <HStack p={0} m={0} spacing={0} >
                <Box className='SlNo' p={0} m={0} >
                    <VStack>
                        <Text>{"Sl\nNo."}</Text>

                    </VStack>
                </Box>
                <Box className='Description'>
                    <Text>Description of Goods</Text>
                </Box>
                <Box className='H-Q-R'>
                    <Text>HSN/SAC</Text>
                </Box>
                <Box className='Gst'>
                    <VStack p={0} m={0}>
                        <Text>{"GST\nRate"}</Text>
                    </VStack>
                </Box>
                <Box className='H-Q-R'>
                    <Text>Quantity</Text>
                </Box>
                <Box className='H-Q-R'>
                    <Text>rate</Text>
                </Box>
                <Box className='Per'>
                    <Text>Per</Text>
                </Box>
                <Box className='Amt'>
                    <Text>Amount</Text>
                </Box>
            </HStack>

            <HStack p={0} m={0} spacing={0}>
                <Box p={0} m={0} className='SlNo-OutPut'>
                    <Text></Text>
                </Box>
                <Box className='Description_OutPut'>

                </Box>
                <Box className='H-Q-R-OutPut'>
                    <Text>HSN/SAC</Text>
                </Box>
                <Box className='Gst-OutPut'>
                    <VStack p={0} m={0}>
                        <Text>{"GST\nRate"}</Text>
                    </VStack>
                </Box>
                <Box className='H-Q-R-OutPut'>
                    <Text>Quantity</Text>
                </Box>
                <Box className='H-Q-R-OutPut'>
                    <Text>rate</Text>
                </Box>
                <Box className='Per-OutPut'>
                    <Text>Per</Text>
                </Box>
                <Box className='Amt-OutPut'>
                    <Text>Amount</Text>
                </Box>
            </HStack>
            <HStack p={0} m={0} spacing={0}>
                <Box p={0} m={0} className='SlNo-OutPut-Total'>
                    <Text></Text>
                </Box>
                <Box className='Description_OutPut-Total'>

                </Box>
                <Box className='H-Q-R-OutPut-Total'>
                    <Text>HSN/SAC</Text>
                </Box>
                <Box className='Gst-OutPut-Total'>
                    <VStack p={0} m={0}>
                        <Text>{"GST\nRate"}</Text>
                    </VStack>
                </Box>
                <Box className='H-Q-R-OutPut-Total'>
                    <Text>Quantity</Text>
                </Box>
                <Box className='H-Q-R-OutPut-Total'>
                    <Text>rate</Text>
                </Box>
                <Box className='Per-OutPut-Total'>
                    <Text>Per</Text>
                </Box>
                <Box className='Amt-OutPut-Total'>
                    <Text>Amount</Text>
                </Box>
            </HStack>

            <HStack p={2} m={0} justify={"space-between"} className='Total_words'>
                <Text >Ten thousnd five hundred ninety-five Rupees Fifty Paise Only</Text>
                <Text >E. & O.E</Text>
            </HStack>
            <Box className='Taxable-Box' >
                <HStack gap={0} spacing={0} p={0} m={0}>
                    <VStack className='Taxable-Box-1'>
                        <Text>uhsdrtuiwh4ifrth</Text>
                    </VStack>
                    <VStack className='Taxable-Box-2'>

                    </VStack>
                    <VStack className='Taxable-Box-3' p={0} m={0} gap={0}>
                        <Box className='Cgst-Box'>
                            <Text textAlign={"center"}>CGST</Text>
                        </Box>
                        <Box p={0} m={0} gap={0}>
                            <HStack p={0} m={0} gap={0}>
                                <Box className='Cgst-Box-Rate'></Box>
                                <Box className='Cgst-Box-Amt'></Box>
                            </HStack>
                        </Box>
                    </VStack>
                    <VStack className='Taxable-Box-3' p={0} m={0} gap={0}>
                        <Box className='Cgst-Box'>
                            <Text textAlign={"center"}>SGST</Text>
                        </Box>
                        <Box p={0} m={0} gap={0}>
                            <HStack p={0} m={0} gap={0}>
                                <Box className='Cgst-Box-Rate'></Box>
                                <Box className='Cgst-Box-Amt'></Box>
                            </HStack>
                        </Box>
                    </VStack>
                    <VStack className='Taxable-Box-5'>

                    </VStack>
                </HStack>

            </Box>
            <Box style={{
                boxSizing: "border-box"
            }}>
                <Grid gap={0} spacing={0} p={0} m={0}>
                    <GridItem className='Taxable-Box-1A'></GridItem>
                    <GridItem className='Taxable-Box-1B'></GridItem>
                </Grid>

            </Box >
            <Box className='Taxable-Box-1'></Box>
            <Box className='Taxable-Box-1A'></Box>
        </Box>
    )
}

export default Decription
