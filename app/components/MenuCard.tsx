import React from 'react';
import { Button,  Stack, Text, Card, CardBody, CardFooter, Heading, Divider,} from '@chakra-ui/react';
import Image from 'next/image';
import img2 from '@/app/Image/carry.png'



const MenuCard = () => {
  return (
    <Card maxW='sm' bg='white'>
        <CardBody>
            <Image src={img2} alt='カレー' />
            <Stack mt='6' spacing='3'>
              <Heading size='lg'>
               ビーフカレー
              </Heading>
              <Text>Beef Curry</Text>
              <Text color='black' fontSize='3xl'>
                ￥500
              </Text>
            </Stack>
        </CardBody>

        <CardFooter>
            <Button variant='solid' colorScheme='green'>
                注文
            </Button>
        </CardFooter>
    <Divider/>
    </Card>
   

  );
}

export default MenuCard;