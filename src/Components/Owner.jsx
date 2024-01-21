import React, { useState } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Box, Image, Button } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa6';

const Owner = () => {
    const [selectedOwner, setSelectedOwner] = useState('Samran Sen');

    const handleOwnerSelect = (ownerName) => {
        setSelectedOwner(ownerName);
    };

    return (
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                    {selectedOwner}
                </MenuButton>
                <MenuList>
                    <MenuItem minH='48px' onClick={() => handleOwnerSelect('Samran Sen')}>
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src='https://placekitten.com/100/100'
                            alt='Fluffybuns the destroyer'
                            mr='12px'
                        />
                        <span>Samran Sen</span>
                    </MenuItem>
                    <MenuItem minH='40px' onClick={() => handleOwnerSelect('Tanmoy Thakuri')}>
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src='https://placekitten.com/120/120'
                            alt='Simon the pensive'
                            mr='12px'
                        />
                        <span>Tanmoy Thakuri</span>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};

export default Owner;

