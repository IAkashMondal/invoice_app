import React, { useState } from 'react';
import { Flex, Button, VStack, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';

const InvoiceBuilder = () => {
    const [invoiceData, setInvoiceData] = useState({
        customerName: '',
        invoiceNumber: '',
        items: [],
        totalAmount: 0,
    });

    const handleInputChange = (field, value) => {
        setInvoiceData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleAddItem = () => {
        const newItem = { itemName: '', quantity: 1, price: 0 };
        setInvoiceData((prevData) => ({
            ...prevData,
            items: [...prevData.items, newItem],
        }));
    };

    const handleItemChange = (index, field, value) => {
        const updatedItems = [...invoiceData.items];
        updatedItems[index] = {
            ...updatedItems[index],
            [field]: value,
        };

        setInvoiceData((prevData) => ({
            ...prevData,
            items: updatedItems,
        }));
    };

    const handleGeneratePDF = async () => {
        try {
            // Add content to the PDF
            const pdf = new jsPDF();
            pdf.text('Invoice Preview', 20, 20);
            pdf.text(`Customer Name: ${invoiceData.customerName}`, 20, 30);
            pdf.text(`Invoice Number: ${invoiceData.invoiceNumber}`, 20, 40);

            invoiceData.items.forEach((item, index) => {
                const yPos = 50 + index * 10;
                pdf.text(`${item.itemName} x ${item.quantity} - $${item.price}`, 20, yPos);
            });

            pdf.text(`Total Amount: $${invoiceData.totalAmount}`, 20, 120);

            // Save PDF and trigger download
            pdf.save('invoice.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    const handleProcessData = async () => {
        try {
            // Send data to the server
            const response = await fetch('http://localhost:3007/Invoicedata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(invoiceData),
            });

            if (response.ok) {
                // Data successfully added to the server, now generate the PDF
                handleGeneratePDF();
            } else {
                console.error('Failed to add data to the server.');
            }
        } catch (error) {
            console.error('Error processing data:', error);
        }
    };

    return (
        <Flex p={5} align="flex-start">
            {/* Invoice Form */}
            <VStack spacing={4} mr={10}>
                <FormControl>
                    <FormLabel>Customer Name</FormLabel>
                    <Input
                        type="text"
                        value={invoiceData.customerName}
                        onChange={(e) => handleInputChange('customerName', e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Invoice Number</FormLabel>
                    <Input
                        type="text"
                        value={invoiceData.invoiceNumber}
                        onChange={(e) => handleInputChange('invoiceNumber', e.target.value)}
                    />
                </FormControl>
                {invoiceData.items.map((item, index) => (
                    <div key={index}>
                        <FormControl>
                            <FormLabel>Item Name</FormLabel>
                            <Input
                                type="text"
                                value={item.itemName}
                                onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Quantity</FormLabel>
                            <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Price</FormLabel>
                            <Input
                                type="number"
                                value={item.price}
                                onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                            />
                        </FormControl>
                    </div>
                ))}
                <Button colorScheme="teal" onClick={handleAddItem}>
                    Add Item
                </Button>
            </VStack>

            {/* Invoice Preview */}
            <VStack spacing={4}>
                <Text fontSize="xl">Invoice Preview</Text>
                {/* ... (other preview content) */}
            </VStack>

            {/* Submit and Generate PDF Button */}
            <Button colorScheme="teal" onClick={handleProcessData}>
                Submit and Generate PDF
            </Button>
        </Flex>
    );
};

export default InvoiceBuilder;
