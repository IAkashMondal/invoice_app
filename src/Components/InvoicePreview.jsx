// InvoicePreview.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const InvoicePreview = ({ invoiceData }) => {
    return (
        <Box p={4} border="1px solid gray">
            <Text fontSize="xl">Invoice Preview</Text>
            {/* Display customer details */}
            {/* ... (customer name, invoice number, etc.) */}
            <Text>Items:</Text>
            <ul>
                {invoiceData.items.map((item, index) => (
                    <li key={index}>
                        {item.itemName} x {item.quantity} - ${item.price}
                    </li>
                ))}
            </ul>
            <Text>Total Amount: ${invoiceData.totalAmount}</Text>
        </Box>
    );
};

export default InvoicePreview;
