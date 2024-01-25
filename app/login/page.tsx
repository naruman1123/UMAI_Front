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
} from '@chakra-ui/react';

export default function userLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ name: "", email: "", password: "" });
    const [token, setToken] = useState(""); // トークンを格納するステート
    const router = useRouter();
    const {state, dispatch} = UserStateUse();
    // Email用のテキストフィールドを変更した際のメソッド
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (!e.target.value) {
        setError((prev) => ({
          ...prev,
          email: "エラー：メールアドレスを入力してください。",
        }));
      } else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(e.target.value)) {
        setError((prev) => ({
          ...prev,
          email: "エラー：正しいメールアドレスを入力してください。",
        }));
      } else {
        setError((prev) => ({ ...prev, email: "" }));
      }
    };
  
    // password用のテキストフィールドを変更した際のメソッド
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      if (!e.target.value) {
        setError((prev) => ({
          ...prev,
          password: "エラー：パスワードを入力してください。",
        }));
      } else if (!/^[a-zA-Z0-9]{6,}$/.test(e.target.value)) {
        setError((prev) => ({
          ...prev,
          password: "エラー：半角英数字6文字以上で入力してください。",
        }));
      } else {
        setError((prev) => ({ ...prev, password: "" }));
      }
    };
  
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
        const response = await axiosInstance.post('/api/token', params)
  
        console.log('Token in:',response)
  
        // FastAPIからのレスポンスからトークンを抽出
        setToken(response.data.access_token);
        //test変数を定義しtokenを代入
        let Token = response.data.access_token;
        //testのURLにとぶ
        dispatch({ type: "setData", payload: Token });
        dispatch({ type: "setName", payload: Token });
        router.push(`/userPage`);
  
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
      
      <Box
        mt={8}
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <center>
        <Heading as="h1" size="xl">
          UMAI Login画面
        </Heading>
      </center>

      </Box>


      <Box
        maxW="md"
        mx="auto"
        mt={8}
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
  
        
        
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="email"
            placeholder="Enter your Email"
            onChange={handleEmailChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handlePasswordChange}
            value={String(password)}
            
          />
        </FormControl>

        <Button colorScheme="teal" mt={4} onClick={handleSubmit} >
          Login
        </Button>
      </Box>
    </ChakraProvider>
  );
};


