// LoginForm.jsx

'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { UserStateUse } from '../store/UserStateContext';
import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import Header from '../components/Header';

export default function userLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ name: "", email: "", password: "" });
    const [food, setfood] = useState(""); // トークンを格納するステート
    const router = useRouter();
    const {state, dispatch} = UserStateUse();

  
    // 送信ボタンを押した際のメソッド
    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
  
      
      e.preventDefault();
      console.log("submit")
      var params = new URLSearchParams();
      params.append('username', email);
      params.append('password', password);
  
      const axiosInstance = axios.create({
        baseURL: "http://localhost:8000",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "Access-Control-Allow-Origin": "*",
        },
      })
      try {
        const response = await axiosInstance.post('/foods/1', params)
  
        console.log('Token in:',response)
  
        // FastAPIからのレスポンスからトークンを抽出
        setfood(response.data.access_token);
        //test変数を定義しtokenを代入
        let Food = response.data.access_token;
        //testのURLにとぶ
        console.log({Food})
  
      } 
      catch (error) {
        //testのURLにとぶ
        router.push(`/Error`);
  
        console.log("エラーだよ：");
        console.error(error);
      }
    
    
    };



  return (
    <ChakraProvider>
      <Header/>
      <Spacer bg='#f4f3f2' h='100'/>
      <Box pt='30' bg='#f4f3f2' h='700' w='full'>
          <Button colorScheme="teal" mt={4} onClick={handleSubmit} >
            Login
          </Button>
      </Box>
    </ChakraProvider>
  );
};


