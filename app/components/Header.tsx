'use client'
import React from 'react';
import { Box, Flex, Spacer,  Button, } from '@chakra-ui/react';
import Image from 'next/image';
import logo from '@/app/Image/icon.png'
import { useRouter } from 'next/navigation';
import { UserStateUse } from "../store/UserStateContext";

const Header = () => {
  const router = useRouter();

  const {state, dispatch} = UserStateUse();


  const handlelogout = () => {
    dispatch({type:"removeId"});
    router.push(`/login`);
  };  


  const handleMypage= () => {
    if (state.id === null) {
      router.push(`/login`);
      } else {
      router.push('/userPage');
      }
  };

  const handleHOME= () => {
    if (state.id === null) {
      router.push(`/login`);
      } else {
      router.push('/HOME');
      }
  };
  return (
    
    <Flex h='100' p="4" alignItems="center"  bg='#dcdcdc' >
      <Box pt='6' boxSize='150'>
        <Image src={logo} alt='カレー' />
      </Box>
      <Spacer />
      <Box>
        <Button mr="4" bg='#dcdcdc' color="black" onClick={handleMypage} >Mypage</Button>
        <Button mr="4" bg='#dcdcdc' color="black">Cart</Button>
        <Button mr="4" bg='#dcdcdc' color="black" onClick={handlelogout}>LogOut</Button>
        <Button mr="4" bg='green' color="white"onClick={handleHOME}>Home</Button>
      </Box>
    </Flex>
  );
}

export default Header;
