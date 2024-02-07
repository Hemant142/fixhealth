import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import heroImg from "../Image/heroimg.jpg"
import Navbar from '../Component/Navbar'

const Home = () => {
  return (
    <Box>
        {/* <Navbar/> */}
    <Box height="100vh" width="100%" position="relative" >
      <Image
        src={heroImg}
        alt='Hero Image'
        objectFit="cover"
        height="100%"
        width="100%"
        position="absolute"
        top="0"
        left="0"
      />
      
    </Box>
    {/* Get the BookNow.tsx */}
    <Box  maxWidth={"400px"} marginTop={"-500px"}>
      <Card>
    <CardHeader>
    <Heading as="h3" size="lg" textAlign="center" color={"#495770"}>
             Book an Appointment for FREE
          </Heading>
          <Text fontSize='md' textAlign="center" color={"#388aaf"}>60+ Expert Physioterapists for 200+ Conditions</Text>
          
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
      </Box>
    

   
    </Box>
  )
}

export default Home;
