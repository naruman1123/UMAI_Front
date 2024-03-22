import React from 'react';
import Header from '../components/Header';
import MenuCard from '../components/MenuCard';
import { ChakraProvider, Box, HStack, Flex, Center, Text, Card, CardHeader, CardBody, CardFooter, Heading, Divider, Spacer,} from '@chakra-ui/react';
import Image from 'next/image';
import img1 from '@/app/Image/ziyugaoka.png'



const MainPage = () => {
  
  return (
    <ChakraProvider>
      <Header />
      <Box bg={'#f4f3f2'} p='10'>
        <Center boxSize={'full'} >
          <Image src={img1}  alt='ローカルの画像'/>
        </Center>
      </Box>
      <Box bg='#dcdcdc'p ='2'>
        <Text as='b' pl='30' fontSize='40px'>MENU</Text>
      </Box>
      <Spacer bg='#f4f3f2' h='100'/>
      

      <HStack w='full' h='600px' bg={'#f4f3f2'} justify='center'pt='6' spacing='20' >
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
      </HStack>
      <Spacer bg='#f4f3f2' h='100'/>
      <HStack w='full' h='600px' bg={'#f4f3f2'} justify='center'pt='6' spacing='20' >
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
      </HStack>
      <Spacer bg='#f4f3f2' h='100'/>
      <HStack w='full' h='600px' bg={'#f4f3f2'} justify='center'pt='6' spacing='20' >
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
      </HStack>
      <Spacer bg='#f4f3f2' h='100'/>
    </ChakraProvider>
  );
}

export default MainPage;
