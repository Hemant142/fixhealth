// Home.tsx
import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormLabel, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import heroImg from "../Image/heroimg.jpg"
import Footer from './Footer'
import BookNow from '../Component/BookNow'

const Home = () => {
  const [Name, setName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [isBookNowOpen, setIsBookNowOpen] = useState(false); // State to control BookNow modal
const [count,setCount]=useState(1)
  // Function to handle opening BookNow modal
  const handleOpenBookNow = () => {
    setIsBookNowOpen(true);
    setCount(count+1)
  };

  return (
    <Box position="relative">
        <Box height={{ base: "50vh", md: "100vh" }} width="100%" position="relative">
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

        <Box textAlign="center">
          <Box
            maxWidth={{ base: "90%", md: "400px" }}
            margin={{ base: "20px auto", md: "20px auto 0" }}
            position={{ base: "static", md: "static", lg:"absolute" }}
            top={{ base: "auto", md: "100%", lg: "40%" }}
            left={{ base: "auto", md: "auto" , lg:"10%" }}
            transform={{ base: "none", md: "none",lg:"translateY(-60%)" }}
            zIndex="1" // Ensure the card appears above the image
          >
            <Card>
              <CardHeader>
                <Heading as="h3" size="lg" textAlign="center" color={"#495770"}>
                  Book an Appointment for FREE
                </Heading>
                <Text fontSize='md' textAlign="center" color={"#388aaf"}>60+ Expert Physiotherapists for 200+ Conditions</Text>
              </CardHeader>
              <CardBody>
                {/* <Text>View a summary of all your customers over the last month.</Text> */}
             
              <>
              <FormControl color={"#495770"}  paddingLeft={"3"} paddingRight={"3"}>
                <FormLabel>Your name</FormLabel>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4} color={"#495770"} paddingLeft={"3"} paddingRight={"3"}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                width={"100%"}
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </FormControl>
            </>

            </CardBody>
              <CardFooter margin={"auto"}>
                <Button colorScheme="blue" onClick={handleOpenBookNow}>Start Your Recovery</Button>
              </CardFooter>
            </Card>
          </Box>
        </Box>
<Box>
  <Footer/>
</Box>

{/* BookNow modal */}
<BookNow isOpen={isBookNowOpen} onClose={() => setIsBookNowOpen(false)} Name={Name} phone={phone} count={count} />
    </Box>
  )
}

export default Home;
