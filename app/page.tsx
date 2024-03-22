import React from 'react';
import Header from './components/Header';
import MenuCard from './components/MenuCard';
import { ChakraProvider, Box, HStack, Flex, Center, Text, Card, CardHeader, CardBody, CardFooter, Heading, Divider,} from '@chakra-ui/react';
import Image from 'next/image';
import img1 from '@/app/Image/ziyugaoka.png'



const MainPage = () => {
  
  return (
    <ChakraProvider>
      <Header />
      <Box bg={'gray.400'} p='10'>
        <Center boxSize={'full'} >
          <Image src={img1}  alt='ローカルの画像'/>
        </Center>
      </Box>
      <Box p='2'>
        <Text as='b' pl='30' fontSize='40px'>MENU</Text>
      </Box>
      

      <HStack w='full' h='600px' bg={'gray.400'} justify='center'pt='6' spacing='20' >
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
      </HStack>
      <HStack w='full' h='600px' bg={'gray.400'} justify='center'pt='6' spacing='20' >
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
      </HStack>
      <HStack w='full' h='600px' bg={'gray.400'} justify='center'pt='6' spacing='20' >
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
      </HStack>
      
    </ChakraProvider>
  );
}

export default MainPage;
