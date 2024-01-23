// InvoiceForm.js
import React, { useState } from 'react';
import { VStack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const InvoiceForm = ({ onAddItem }) => {
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);

    const handleAddItem = () => {
        // Validate input fields
        if (!itemName || quantity <= 0 || price < 0) {
            alert('Please fill in all fields with valid values.');
            return;
        }

        onAddItem({ itemName, quantity, price });
        // Clear input fields after adding an item
        setItemName('');
        setQuantity(1);
        setPrice(0);
    };

    return (
        <VStack spacing={4}>
            {/* Form inputs for customer details */}
            {/* ... (customer name, invoice number, etc.) */}
            {/* Form inputs for item details */}
            <FormControl>
                <FormLabel>Item Name</FormLabel>
                <Input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Quantity</FormLabel>
                <Input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Price</FormLabel>
                <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </FormControl>
            <Button colorScheme="teal" onClick={handleAddItem}>
                Add Item
            </Button>
        </VStack>
    );
};

export default InvoiceForm;
