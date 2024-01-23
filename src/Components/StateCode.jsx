import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Input, Text } from '@chakra-ui/react';
// import { gstStates } from "../Data"


const StateSearch = () => {
    const [gstData, setGstdata] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:3007/gstStates');
            const data = await response.json();
            setGstdata(data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };
    const handleSearch = () => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        const foundState = Object.values(gstData.gstStates).find(
            (state) => state.state.toLowerCase() === lowerSearchTerm
        );

        setSearchResult(foundState);
    };

    return (
        <ChakraProvider>
            <Box maxW="md" mx="auto" mt={8}>
                <Input
                    placeholder="Search for a state"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Text mt={2} fontWeight="bold">
                    Search Result:
                </Text>
                {searchResult ? (
                    <Box p={4} borderWidth="1px" borderRadius="md">
                        <Text>State: {searchResult.state}</Text>
                        <Text>Code: {searchResult.gstCode}</Text>
                    </Box>
                ) : (
                    <Text>No result found</Text>
                )}
                <button onClick={handleSearch}>Search</button>
            </Box>
        </ChakraProvider>
    );
};

export default StateSearch;
