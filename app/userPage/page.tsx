// UserManagement.jsx
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserStateUse } from "../store/UserStateContext";
import {
  ChakraProvider,
  Box,
  Button,
  Table,
  Tbody,
  Tr,
} from '@chakra-ui/react';

export default function UserPage (){
    
    const router = useRouter();

    const {state, dispatch} = UserStateUse();


    const handlelogout = () => {
      dispatch({type:"removeId"});
      router.push(`/login`);
    };
      

    

  return (
    <ChakraProvider>
      <Box p={4}>

        <Table variant="striped" colorScheme="teal">
          <Tbody>
                <Tr>Name:{state.Name}</Tr>
                <Tr>UerID:{state.id}</Tr>
          </Tbody>
        </Table>
        <Button colorScheme="teal" mt={4} onClick={handlelogout} >
          Logout
        </Button>
      </Box>
    </ChakraProvider>
  );
};
