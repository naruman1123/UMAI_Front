// UserManagement.jsx
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserStateUse } from "../store/UserStateContext";
import Header from '../components/Header';
import {
  ChakraProvider,
  Box,
  Button,
  Text,
  Heading,
  Flex,
  Avatar
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
    <Header/>
    <Flex justifyContent="center" alignItems="center" height="800">
    <Box p={8} w="3xl" h='600' borderRadius="md" boxShadow="lg">
      <Flex justifyContent="center">
        <Avatar size="2xl" />
      </Flex>
      <Box textAlign="center" mt={4}>
        <Heading size="lg">John Doe</Heading>
        <Text mt={2} color="gray.600">id:{state.id}</Text>
      </Box>
      <Box mt={4}>
        <Text>Username: johndoe</Text>
        <Text>Email: {state.Name}</Text>
        <Text>Location: New York, USA</Text>
        <Button variant='solid' colorScheme='green' onClick={handlelogout}>LogOut</Button>
      </Box>
    </Box>
  </Flex>
  </ChakraProvider>
  );
};
