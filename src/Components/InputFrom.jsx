import React, { useState } from 'react';
import {
    Box, FormControl, FormLabel, Input, Button, VStack, HStack, PinInput, PinInputField, Radio, RadioGroup, InputRightAddon, Table,
    TableCaption, TableContainer, Tr, Tbody, Th, Tfoot, Text, InputGroup, InputRightElement, Td, Thead
} from '@chakra-ui/react';
import { PiCurrencyInrBold } from 'react-icons/pi';
import { GetCurrentDate } from '../Functions/Date';
import { TbTextPlus } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { AiOutlinePercentage } from "react-icons/ai";
export const InputForm = () => {
    const initialValues = {
        companyName: 'RAICHANGA MINERALS & LOGISTICS LLP',
        CompanyAddress: 'MANABARI, ODLABARI',
        CompanyDistrict: "JALPAIGURI",
        gstin: '19AAVFR2155G1ZR',
        stateName: 'West Bengal',
        stateCode: '19',
        contact: '+91 6294065691',
        email: 'raichangamineralslogisticsllp@gmail.com',
        gst: '5',
        sgst: '2.5',
        cgst: '2.5',
    };
    const CurrentDate = GetCurrentDate();
    const [name, setName] = useState('');
    const [rate, setRate] = useState('400');
    const [ratePaise, setRatePaise] = useState('00');
    const [weight, setWeight] = useState('');
    const [weightKg, setWeightKg] = useState('');
    const [iseditable, setIsEditable] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(['stone-dust']);
    const [companyInfo, setCompanyInfo] = useState(initialValues);
    const handleCompanyInfoChange = (field, value) => {
        setCompanyInfo(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };


    const handeleditablechange = () => {
        setIsEditable(!iseditable);
    }
    const handleCheckboxChange = (values) => {
        setSelectedOptions(values);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleNameChangeDefault = (name) => {
        setName(name);
    };
    const handleRateChange = (value) => {
        setRate(value);
    };

    const handleRatePaiseChange = (value) => {
        setRatePaise(value);
    };
    const handleWeightChange = (value) => {
        setWeight(value);
    };
    const handleWeightKgChange = (value) => {
        setWeightKg(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const mergedRate = `${rate}.${ratePaise}`;
        // Use mergedRate for further processing

        console.log('Saved Company Info:', companyInfo)
        // Handle form submission logic here
    };
    //callculation------------------------------------------------------------------------>
    let cost = ((weight, weightKg, rate, ratePaise) => {
        let value = (Number(`${weight}.00`) + Number(`0.${weightKg}`)) * (Number(`${rate}.00`) + Number(`0.${ratePaise}`));
        return value;
    })
    let newbill = cost(weight, weightKg, rate, ratePaise);
    let cgst = newbill * 2.5 / 100;
    let sgst = newbill * 2.5 / 100;
    let grossTotal = newbill + cgst + sgst
    let Adjust = -10;
    let netTotal = grossTotal - 10;

    return (
        <VStack spacing={4} align="stretch" p={4} w={'50%'}>
            <HStack>
                <Text>Invoice No:</Text><Text>RML/23-34/712</Text>
                <Text>Date:</Text><Text>{CurrentDate}</Text>
            </HStack>
            < >
                <HStack px={20}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <InputGroup value={name} onChange={handleNameChange}>
                            <Input
                                type="text"

                                placeholder="Enter Owner name"
                                required
                            />
                            {name && <InputRightElement width="2.5rem" h="100%" color="red.500">
                                <RxCross2 onChange={handleNameChangeDefault} />
                            </InputRightElement>}
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>TRUCK NUMBER</FormLabel>
                        <Input type="text" placeholder="WB-73-AA-0001" />
                    </FormControl>
                </HStack>
                <HStack >
                    <FormControl>
                        <RadioGroup defaultValue='Stone Dust'>
                            <HStack spacing={5} direction='row'>
                                <Radio colorScheme='green' value='Stone Dust'>
                                    Stone Dust
                                </Radio>
                                <Radio colorScheme='green' value='Stone Chips'>
                                    Stone Chips
                                </Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>WEIGHT</FormLabel>
                        <HStack ml={-15}>
                            <PinInput otp value={weight} onChange={(value) => handleWeightChange(value)}>
                                <PinInputField />
                                <PinInputField />
                                <Text>.</Text>
                            </PinInput>
                            <PinInput otp value={weightKg} onChange={(value) => handleWeightKgChange(value)}>
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                            <Text>MT</Text>
                        </HStack>
                    </FormControl>
                    {/* Input fields for rate & paise */}
                    <FormControl>
                        <FormLabel>RATE</FormLabel>
                        <HStack>
                            <Box ml={-15}> <PiCurrencyInrBold /></Box>
                            <PinInput otp value={rate} onChange={(value) => handleRateChange(value)}>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                            <Text>.</Text>
                            <PinInput otp value={ratePaise} onChange={(value) => handleRatePaiseChange(value)}>
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </FormControl>
                </HStack>
            </>
            <FormControl>
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                            <Tr justifyContent={'space-between'}>
                                <Th>COST</Th>
                                <Th>CGST</Th>
                                <Th>SGST</Th>
                                <Th>GROSS TOTAL</Th>
                                <Th>ADJUST</Th>
                                <Th isNumeric>NET TOTAL</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr justifyContent={'space-between'}>
                                <Td>{cost(weight, weightKg, rate, ratePaise)}</Td>
                                <Td>{cgst} </Td>
                                <Td isNumeric>{sgst}</Td>
                                <Td>{grossTotal}</Td>
                                <Td>{Adjust}</Td>
                                <Td>{netTotal}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <FormLabel>ADDRESS</FormLabel>
                <Input type="address" placeholder="Enter Address" />
            </FormControl>
            <Button onClick={handeleditablechange} color='white' size={'lg'} bg={"#76E4F7"} rightIcon={<TbTextPlus />}><Text as='b'>Edit Constan Items</Text></Button>
            {iseditable ?
                <VStack spacing={4} align="stretch" p={4} w={'70%'} textAlign={'center'}>
                    <FormControl>
                        <FormLabel>Company Name</FormLabel>
                        <Input value={companyInfo.companyName} onChange={(e) => handleCompanyInfoChange('companyName', e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input value={companyInfo.CompanyAddress} onChange={(e) => handleCompanyInfoChange('CompanyAddress', e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Disrict</FormLabel>
                        <Input value={companyInfo.CompanyDistrict} onChange={(e) => handleCompanyInfoChange('CompanyDistrict', e.target.value)} />
                    </FormControl>
                    <HStack>
                        <FormControl>
                            <FormLabel>GSTIN/UIN</FormLabel>
                            <Input value={companyInfo.gstin} onChange={(e) => handleCompanyInfoChange('gstin', e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>State Name</FormLabel>
                            <Input value={companyInfo.stateName} onChange={(e) => handleCompanyInfoChange('stateName', e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>State Code</FormLabel>
                            <Input value={companyInfo.stateCode} onChange={(e) => handleCompanyInfoChange('stateCode', e.target.value)} />
                        </FormControl>
                    </HStack>
                    <HStack>
                        <FormControl>
                            <FormLabel>GST PERCENTAGE</FormLabel>
                            <InputGroup>
                                <Input
                                    value={companyInfo.gst}
                                    onChange={(e) => handleCompanyInfoChange('gst', e.target.value)}
                                    textAlign="center"
                                />
                                <InputRightAddon>
                                    <AiOutlinePercentage />
                                </InputRightAddon>
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>CGST PERCENTAGE</FormLabel>
                            <InputGroup>
                                <Input
                                    value={companyInfo.cgst}
                                    onChange={(e) => handleCompanyInfoChange('cgst', e.target.value)}
                                    textAlign="center"
                                />
                                <InputRightAddon>
                                    <AiOutlinePercentage />
                                </InputRightAddon>
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>SGST PERCENTAGE</FormLabel>
                            <InputGroup>
                                <Input
                                    value={companyInfo.sgst}
                                    onChange={(e) => handleCompanyInfoChange('sgst', e.target.value)}
                                    textAlign="center"
                                />
                                <InputRightAddon>
                                    <AiOutlinePercentage />
                                </InputRightAddon>
                            </InputGroup>
                        </FormControl>
                    </HStack>


                </VStack> : <></>
            }
            <Button colorScheme="teal" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </VStack>
    );
};