import React, { useRef } from 'react';
import axios from 'axios';
import { ChakraProvider, Box, Text, Button, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const InvoiceTemplate = () => {
    const data = {
        invoiceNumber: 'INV-123',
        date: '2024-01-29',
        customer: {
            name: 'John Doe',
            address: '123 Main St, Cityville',
        },
        items: [
            { description: 'Item 1', quantity: 2, price: 50 },
            { description: 'Item 2', quantity: 1, price: 30 },
        ],
        total: 130,
    };

    const invoiceRef = useRef(null);

    const handleDownloadPDF = async () => {
        try {
            // Use Axios for API request
            const response = await axios.post('http://localhost:3007/test', { data });

            if (response.status === 200) {
                const pdfOptions = {
                    margin: 10,
                    filename: `invoice_${data.invoiceNumber}.pdf`,
                };

                const element = invoiceRef.current;

                // Increase the scale for better quality
                const scale = 3;

                html2canvas(element, { scale: scale }).then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF({
                        unit: 'mm',
                        format: 'a4',
                    });

                    // Adjust dimensions to fit entire content on the page
                    const imgWidth = 210; // A4 width in mm
                    const imgHeight = (canvas.height * imgWidth) / canvas.width;

                    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

                    // Save PDF
                    pdf.save(pdfOptions.filename);
                });
            } else {
                console.error('Error in API response:', response.statusText);
                // Display an error message to the user
            }
        } catch (error) {
            console.error('Error:', error);
            // Display a generic error message to the user
        }
    };

    return (
        <ChakraProvider >
            <Box p={8} id="invoice-template" ref={invoiceRef} w={"8.27in"} h={"11.3in"}>
                <Text fontSize="2xl" fontWeight="bold" mb={4} color="black">
                    Invoice #{data.invoiceNumber}
                </Text>
                <Text color="black">Date: {data.date}</Text>
                <Text mt={4} fontWeight="bold" color="black">
                    Customer Information:
                </Text>
                <Text color="black">{data.customer.name}</Text>
                <Text color="black">{data.customer.address}</Text>

                <Table mt={8} variant="simple">
                    <TableCaption>Invoice Items</TableCaption>
                    <Thead>
                        <Tr>
                            <Th color="black">Description</Th>
                            <Th isNumeric color="black">
                                Quantity
                            </Th>
                            <Th isNumeric color="black">
                                Price
                            </Th>
                            <Th isNumeric color="black">
                                Total
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.items.map((item, index) => (
                            <Tr key={index}>
                                <Td color="black">{item.description}</Td>
                                <Td isNumeric color="black">
                                    {item.quantity}
                                </Td>
                                <Td isNumeric color="black">
                                    ${item.price}
                                </Td>
                                <Td isNumeric color="black">
                                    ${item.quantity * item.price}
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>

                <Text mt={8} fontWeight="bold" color="black">
                    Total: ${data.total}
                </Text>

                {/* Exclude the button from the PDF */}
                <Button mt={8} colorScheme="blue" onClick={handleDownloadPDF} style={{ display: 'none' }}>
                    Generate and Download PDF
                </Button>
            </Box>
        </ChakraProvider>
    );
};

export default InvoiceTemplate;
