'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { UserStateUse } from "../store/UserStateContext";
import { ChakraProvider, Box, HStack, Flex, Center, Text, Card, CardHeader, CardBody, CardFooter, Heading, Divider, Spacer,} from '@chakra-ui/react';

const loginChecker = () => {
  const router = useRouter();

  const {state, dispatch} = UserStateUse();

  if (state.id === null) {
		router.push(`/login`);
	  } else {
		router.push('/HOME');
	  }
 

  return (
    <ChakraProvider>
      <Box>
        <Text>リダイレクト...</Text>
      </Box>
    </ChakraProvider>
  );
}

export default loginChecker;