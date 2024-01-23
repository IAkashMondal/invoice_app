import React, { useState, useEffect } from 'react';
import { VStack, Input, Button, HStack } from '@chakra-ui/react';

const AddItemForm = () => {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:3007/items');
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleAddItem = async () => {
        if (itemName && itemPrice) {
            const newItem = { name: itemName, price: itemPrice };
            try {
                await fetch('http://localhost:3007/items', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newItem),
                });
                setItems([...items, newItem]);
                setItemName('');
                setItemPrice('');
            } catch (error) {
                console.error('Error adding item:', error);
            }
        }
    };

    return (
        <VStack spacing={4} align="center">
            {items.map((item, index) => (
                <div key={index}>
                    <Input value={item.name} isReadOnly />
                    <Input value={item.price} isReadOnly />
                </div>
            ))}
            <HStack spacing={4} align="center">
                <Input
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
                <Input
                    placeholder="Item Price"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(e.target.value)}
                />
                <Button onClick={handleAddItem}>+</Button>
            </HStack>
        </VStack>
    );
};

export default AddItemForm;
