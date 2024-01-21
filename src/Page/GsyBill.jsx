import React from 'react'
import{Box} from '@chakra-ui/react'
import Owner from '../Components/Owner';
import { InputForm } from '../Components/InputFrom';

export const GstBill = () => {
  return (
      <Box w='105%' h='100%' p={0} m={0} bg="#012a4a">
     <Owner/>
     <InputForm/>
    </Box>
  )
};


