// InvoicePreview.js
import React from 'react';
import { VStack, Text, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const InvoicePreview = ({ items, totalAmount }) => {
    return (
        <VStack spacing={4}>
            <Text fontSize="xl">Invoice Preview</Text>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Product Name</Th>
                        <Th>Serial Number</Th>
                        <Th>Item Name</Th>
                        <Th>Quantity</Th>
                        <Th>Units</Th>
                        <Th>Price</Th>
                        <Th>Total</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {items.map((item, index) => (
                        <Tr key={index}>
                            <Td>{item.productName}</Td>
                            <Td>{item.serialNumber}</Td>
                            <Td>{item.itemName}</Td>
                            <Td>{item.quantity}</Td>
                            <Td>{item.units}</Td>
                            <Td>${item.price}</Td>
                            <Td>${item.quantity * item.price}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Text>Total Amount: ${totalAmount}</Text>
        </VStack>
    );
};

export default InvoicePreview;
