// Home.tsx
import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormLabel, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import heroImg from "../Image/heroimg.jpg"
import Footer from './Footer'
import BookNow from '../Component/BookNow'
import MeetNow from '../Component/MeetNow'
import Slider from '../Component/Slider'

const Home = () => {
  const items = [
    {
      id: 1,
      imgSrc:
        "data:image/jpeg;base64,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",
      name: "Dr. Ganesh Kumar",
      specialization: "MBBS (senior surgeon)",
      experience: "8 years of experience",
    },
    {
      id: 2,
      imgSrc:
        "https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-eye-level-portrait.jpg",
      name: "Dr. Simpi Kumari",
      specialization: "MBBS (MultiSpecialist)",
      experience: "5 years of experience",
    },
    {
      id: 3,
      imgSrc:
        "data:image/jpeg;base64,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",
      name: "Dr. Shriya Pandey",
      specialization: "MPTh (Musculoskeletal)",
      experience: "3 years of experience",
    },
    {
      id: 4,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmJrjAzWu0Wdi6AgwbiOFeTbdVJI0uGKgECftRzt4_YavyZxe7qYmFtuBOmEy2Xw47M8&usqp=CAU",
      name: "Dr. Priya Kumari",
      specialization: "MBBS (General Physician)",
      experience: "3 years of experience",
    },
    {
      id: 5,
      imgSrc:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWEhUYGRgZGBocGhwcGBgaGhkYGBoaGRwcGBwcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOQA3QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EADoQAAEDAgQDBgQGAgEEAwAAAAEAAhEDIQQFEjFBUWEGInGBkaEyscHwBxNCUtHxI+GSFHJzsiQ0Yv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgQDBf/EACERAQEAAgMBAAMBAQEAAAAAAAABAhESITEDBDJBIlET/9oADAMBAAIRAxEAPwD1NCEJgqEiVI3TFR9ps8bQZoDgHuHiQOg5/fKbXHYttKm97/hY0uPkJXjuJrvrvL3nU95Ljya2Z8miYCjPLjHT548r2YxuaOk6R5m58SqPFZg69/dWePphojh6SqR8E7DiPUf7XHGR3ytN1av5jJ2cDBv4XHRTcjZIg91jQS68STFp8tlXsoQSAIJ4eH2VOpOP5UD4pMjkG7fP7gKsvNRGPd3U/EZwAC2nBDRzhogiY63HCTdQ6mYO1ODiZB3DYF9olx4cYCraGHiYmCI8OS6rMdbibA9SG6fp7pTHGLuWSWc6A7pABn9bS9vsQpLc1e4RDJ2ENEEi8QRIO/oqTFYcucfL1I48rpugS0gb8OkcJ+7J8cUzLJcPzh9y5jCRvaD/AB7LqhmLHAuAPUfqb4R8XhxsIaq2vBdqbyvPEEcPayZwjIM9IKOM0N3Z/FnvlzdiHSATAtu3oRB/hd4mqdLL/oPyH8JRQcdDY4R5Bo+/JOVKQ12uAAB5fW0eqcTXWW4ssrXO8D2A+q3WV1tbmDgASfK4C89q0i148THktbk2I/xvM7MP37KMo6Y1vezTprC8Egz1W2XknZTPCyoBUvp25kbFeqYTFMqMD2GWn7uu3zvWmf6Y6uz8IQhdHMJUiEAqEIQEVCEIARMXQmcX8Do5FI3nfavNn1XPYXQy7QBseEnms0/F6WwLfMxxPRaDtBTYy7XAyduUc1j8Sev31Ky5bt7a8NSdG8TUve5VXUJcYCnBmq0+fL/anYLLtRGm43/tPlJBxuVQcLhnERHH18eqsMPlzwfhJWpwGUtAAi/qrrDYBjRt7KLnb46TCYsQ3KgOnSPknG5OCJAvwW3qYRm8eaYfhmqblYqSV53j8qLfuf6Va7Dcl6dWwTXCCFWVciadp9QnjmWXzYQ0CYseXonqGAJWzZ2eaDt/6/x9VOw2TtHAejU7mU+bFuwp4bwAPYKKMMRsPDy4r0U5Y3lPkotXJm3MR8kTMX5x52+kQb+PoCpeV14a5p4tI8nDdafE5OIt6KgzDL3s+G1x5jZVMtudx49w7g6neaRw/orc9ic7cyq6jUPdO08CsDlrHCJG9vLn5z7Kyw+ILKjX8Q4egMH2VeZbKzljp7kDKVRsA/VTa7mAfZSFpZCpUgQgFQhCAioQhACEJUjecdt2MFQgNiFga/eNwt52xe013gjlfrCxOII1Q3ysVmy/atWP6w2yjdrG3c48OXhwW6yXKC1o1C53TPZTJmNb+Y8S87E8B0WqZAXO9u2PRKWFDRsuXdE66rZMPelbJ4clpH+CaLOacLkNCj1c6MliX8vontK5cjQ25FNONYuWlPNKCpW0wh1IFdgpZVRNQnUWi0f7Cz2d4SAStYWAqnz+n3SmTz7D1nmoWzAmwtuOSfoVyX3Fw6PCVyyhD9XJwj1SYf4nniHH5ldtuWtV7T2XeThmTyVuqrsw2MNS6sB9QrVaJ4yZelQkSpkEqRKgIyEBCAEQhCRvPO3GH0uLjzkef9LEYakHPBP3xXpH4iU/8bHf/qD6LzrDuh4nnMeNgs+fVrT8+8Y9FysRTb4J971Hy93+NvgnXFZ7WjGFDkulI1qdaxKK2b08koCe0ALgxwT0NmiTOyRPFq5hIyNcnC5chq60pkUOS6kulEIJ0xQc7ZLCpzHJnHtlh8FU8T/XntNgl54tIPiAomFb345kk+anVBDnkcvS6itGmX8Tt6Lpi55evYeyz5w1Po0D0srdZH8OMVrw0Hdr3T53+q1y1Txjy9CVIhMipUiVARghCEAIQkSNlPxBeBRZP7/oV5aPj8SvWe3lDVhnH9hBXkjz+rnHyuuOc7d/nenpGVn/ABjwUpgUHIjNFh5gKZUxTWGCVms20y6SmNCebACqaubMbsfvyTDc8p/vHqq1o/V0SuCoFDNmOMagpjKgJsZSMhCUea7fC6Y0JaGysYuwxRcRjmM3O+3+lT4jtRTEhsmPSVUxibWic8KO+q3iQsZiu1jye6AFGOb1avw6j1AdG+08E+BcnoGHe12xB8OCWs2QQsDhsfXY7VDiPAk/8lr8lzL89kmzhuD80cdQt9shju7Ue08Wn5qvY4uYRyJHlCt+1VLRUDhxBCo6b9JgnefdVj3E5evRPwyZFJ//AHD5BblZjsNQazDi/ecZK0604+MmfoQhCpJUqQIQEdCEIASIQkavz3C/mYeowblhjxheG4uQIIiDC9/qnunwXhnaWjFZ4AsXyPMrnm6/Peq2mExQpYVjjvot6LLVMVWqOOgGB0MC/G11r62G14ZggfCN/BRqdJlJkkRHLcngBzKz71GrW6zLsmxT7yPDUR9D9FGrZNiGG7Z6iPVaivWfBfUeGMiYBi3V38KgrZ1QcY11HdQHkepRLb4LjJ7XWFwj7amkdYnhzH31Woy2Wi5+/v5LN4bFar0nlw/a7UHW5SJU/C5k4EB+x2KnK1eMaj8xP0yoWHfqFlYUmiEpTyVOY4DWZ+4+x92VDicnY0HVUa1vh7D357rQZtiIOkHYT4rN1KRe/vPY0zAL3ANZ73J6eEpy3+J11ulwWDw4/S99+OloPtJWjw1ZoAApiOhB+YCwAqPLwHV3s7xBLGS1saoMC7th/wAplXOCrV2ML2VxVIIAY+k9hIO/fgAEeh5quN1vaeWO9SVtG02P4DqCPmmqGEDKhc0RNiO6PooeV5jrILmOY6O81wgg7SJsRt7cldtqA/f1RMhYou2WB10tY3ZdZDLcKaz2BkS7fppN16RmlLVScObSsT2QpEVo/bq9Cqxutos3pucMdDmAWAgFadpkLJYp0QtPgnywHoFfxy7sR+Rj1KkISJVoZSoSJUBHQUIKARIlSJGaxT4Y49F472qomQ/gSQvYsQzU0jmF5n2uwpbQdG7X+0rh9bZY0/DVws/rQ4KDh2EmO6PkqzNXy2GCXcIMwTaYixj5qzykThqfHuN+SKzY2H0HmVwyd8WUxOTV3uD6zmvjZkdwTz5lRcHkdVhYW1XsLDI0iLwRO8GziNlq61V44eGw9t/ZRHve7p4pzOzw+Mvqo/6NzGFhfLS4vJcGl2t0SQ6JBsn6WGaW7ueeZ+amswTnb+/0Cm0sK0CAPPmpytq5JDmAap7XQFHw1OAU+3qph1CxF3TE2j+lVPwjSZbTA8Bx6q9qUrykfRCIFVhmN2LY9VbYdrBs3zhNmhOyRmGPCfIlVysTZtMdpPIp6mxNUqZ5qQymjtF6OuZLSFgsodoxb2xaSt+XQ0noVlG5fDDUF3veY6AmVduptOM3lIu3d8ADmFq8OzS0Dos3keFI0h28yVqAuvwx6uTl+Tl3MYEqRKtDKEIQgGEJEIMJClXJQAsr2mwOoERutSoOZUdQB5Ll9MeWLr8cuOSiyq1IM/Zb+PZPlk7qMx+irpOz2kjxb/pTGCyzWba51TbqAKadQbZPvemXvR0qbNPbyXDd0ziMTGyfwmHc5odzEqV61O0iiE6WQV0xkBI9907NRM9Do4ppunmnmtkQmquHhhI4CyNAgaOBTzGqrFQtKnYfEzuUSwWX+JbAng1NBwTrTZVHOo+Z1dFFx4xHmVFy6kDSph24E+aezcTTI81JyejqaI2AA9lXHfTnymPa1wFGDqU5cMbAgLtacZqaZc8uV2EIQqSVCEICOhCEGFyUqQoBCuXiRCUpEgyPaLCupuZUGzX36A2Uxj+7bbgrDtDS14aoOIaSPEXCzWVYrVSaSRIEHyt9Fn+mMx8avllcvU1z1FrVE3iMUGAucQAASTwAWUxefl92CGcB+ojgTy8N1wktatyeryrVB4qdhM20sa0tJAESCNh0WRwmPLpJt05bSfGPvinsRjSWNiQbbb7GT8vTdOY2C5SxuaeJDhqabFOUxJ3Xn+CzZ7HXO/6b7Dn13iy0eGz5mkktdLRcW38ZTsuy3NNMXNYJcVS4rOg5xa34ARPDzniqHH5o+sAQYbN4PAcY5eF91EwznCdMyCSPAmTw7wMC/MG3OkNK9+ppiCB9x0VOzODTd3mnSeI4b+u3BDKD3XaTBBty5+/H5qHmOXaAHPsTYjg7pbjN0tSnysbDAZg17Q5pBBG4VmyqF5ZlWJdRqgNPdeYc3rO8bc/ZegYfEAtBO/12RrRW7hc8xAawq47HPnDtJ5n5rGZxii5p679IJC13Ycn/AKYTzMeC7/Jm+3jSIQhdmcoQgIQCoSIQEdCEIMJEJEAiQpSkKAYxjJY8Di0rzfJ8Tpc6m7nF+Y3C9OXlHaphp4t0HTqIe2OcfyAuf0x3HT5ZapO1OpzWs4Fw1C/w9eQki3FVowQ+Fo1W525mBHUKbRxX5jodF26TO4J0yR7qHgi5pEmSTtYQ0H2keazSammzct2MNVoDuvcGnjqEeAuOatK2DY5sMcDx5/fBMZzkjcQ2QIdHhKhZViXYdwbimF7JEODdX7R3m+EmdrIkmXlFln83E9mVwOHL0tI9D6p5mXPBMXabWI2tf6+SucPWwlTUKdWmTqAhtQW2NhO2+3XkrN2TU95cDI3d1AVcKX/pj/ZWfw2Thn6+NxuIJvHI/wAKxw2VNJ1NDiW3O0DrJ48eas6hwtANfUc1pDv1OJJkG0X43sFBxHagPNRmGY6XNAa8ghurYnSYdaBHP5vjJ7SmWV/WIXaPGOoMLKZAqOa8MDQCWusASSNr8RyVJlOVOa01sU5z3kWLiTHMjkrrCZWXvL6p1OJlxPHopGakFhbBja0eym3/AIuY69u6xeDpaqszMO1X4jafU78YWmfioIG0kCeEE/OJWbwFPQ4Og3sTwkTN+RICfxON74DeEf8AItBMnoQAqmO65XLUSsfipBaf3fceRXp3ZjClmGptO+kH1XleAofmVWUxcucNXrJXtFJmloHIALvhNRm+l3XSVIlVuYSpEqAEqRKgIqEiJQYSSiUiAEFBXJKAJWN/ELJzUpCrTbL6ZkxuWcR9fJbBc1GBwLTsRB8CgR4MzFFsEGYJJ8CRMdbH1U9lVx0lpEwDPJvMkj3TXafKzhq7m/oJJaY4HgomGqWLTG9rG/QR4rhli0Y5NlgcSCANzFzcjyMXU1+HDpsDzEfJZfL8QQYPCOZta5jY32V/SxXI77db7BcLONasctwj8qpElzWX6gFNOyNjviEjkZI9JU99cRNpSHMWixHCfsp7Xz6M4PI2N2aOsAD3VzhcExvL7+arHZm6YYB9/wBFd0cU8k6ibR8zeyfiblatcRiGtabwBx6rO5lWc4RTg8bEXttO2x6bSnc0xTgW6SLi9jvtb1VVWfEsYQHaZLQC2d5tsDxjw5pSbrnbqItesGg8gSTvveBwm6iMaQzWdzO3Ekz6pnEv1bmbySeLYmfHZXGQ5e6q4PI7jNupK7a4xw3yrSfh/lR1uqvERYBeiKj7OUgxpaOau11xu5txz6y06QkSq0ALpcroJUBCEICHKJXMpZQZUSuZRKAUlclBK5JQAUkpC5MYrFNY0ucYAQGV7ZZeKhhw3EyvMsZhXU36XcPhPPw9F6pj8SaneiBwWYzrLxUZHHcHl4LPllxysaccd4xmsLVvJfEWvBjyPH0Vth8T3vicegaBt6/ZPJUP5bmOhzfXnzVpgcQIcJjbkeImAfnx+RljKeGWuq0IrNe2JvwMW6xCiYim4wZHK17RFva/RN4Z4kxMDlabSZk3AttG/mrFrGlwEibiAdrXmdly1p36qE2g4i0zbu3uR19R5KXhw8Rq30jffcfFtt0/t1zD+kwBxg94EDl47rkgkEzADeE22AnnY/cpjqIweWuDiYgkkkSOMtkGeCqcbWIfMg34cAfO3+vFSHMIu8ye8JixgxfadhEjnzE1FUue6BJLrRadovHG/srxjhnkfy+gar9DeN55Beg4Ok1jQ1toACq8ky8UmC3eIGrx5BXLVOWW6rDHU7XuSbHxVzKzmFquYwuaJjcK1y/MGVWBzDMrThP8xl+l/wBVOlErmUsq0Ol0FxKUFAdyhcyllAV8olM6kakjPakkpvUmquIa0S4gIB8uXJcqDHdqaLLapPS6osT20LrU2eZsjQbitXa0EuKw+PzI4nFU6LD3Ncu6ht/SyqcwzurUGkugdFM/D+iH4pzv2M93H/ScKtPmmkO0N/SFS1KYKlY7Ff8AzHsP7QVxU3WL7fs2fH9VHj8ua8HnzWcq4V9N0Ed3fbzW5fT4qLUwofZwU452dVeWEvbM4LEt1CZuB5QJ+atMHUbAFzuT5/6nzlM4/IAb0zBHUqs/LrsPeYSJEkcT9V16y8TvLH1qKDQHAm+3OLT67lcYnEgSGmwM35GJ28Pks8cwqA6dDhFo/k85+q6jEPNqboPGOX9I0OQxmK0uDWCSCY6kna24iQrns9luga6g75AgftG+/NO5PkuiH1B3uE7/AHdX7GBK5dahTHvdcUhZS2BNsan2DiubqtMpPxNKzOZVn4HE6mz+VUMkcncSFeZDU1PeRsLJnt3hNeGLh8TO8PJbcP1jBn+1XmX5gyq0OaQZCmSvHcmzp9IgsNuI4LcZf2tpuH+Q6T1VJawFdAqsw+a0n/C8eqmMqA7FASAUspoOS6kBUak1iMYxglzgFj8y7XC4pCevBZXHZo+oe+8npwS0GxzTtg0S2kJ68FlMfnNWp8bzHIWCqn1E2wF/gmDrC57uimtbFgmqJiw2TsoIhK1f4WtmpXd/2j5n6rI1DYrcfhTT7lZ3N8egCAj9qh+Vjqb+DwWnx3HyKnOhwsu/xIwhNEVBvTe13lsfYlVmV4rWwHosn3n+pW38e7xsTimnsT8Jt1OFwdTRZddimF0QhjrqoCflD9o9lIp046LunBXYVaBNKXSlIStEJB0xijZligxjjOwTuIrwFku0eOLgGN/UQPUwnrd0PJttuxTT+XqO7r+qu82pB9N7TxaVF7O0NFMDkAPZWOJ+E+C2POt28MotLHuYf0uI9CpRMJrPaZZiXjmZTjHSJKoEe5wuwkHoSE7gu1eJpGC+Y4Oum3FQsSwOtxQTeZX+IAMCq2OouFrcHn1Co3U17Y8V4ToLbJxlUjYkIB4vMJkm6EIDhy7pvOhCEwlYf4U+kQgzNQ2K9F/C/wD+s/8A8jkISJoO0tFrqFQOEjQ75LzTsxUOgIQs/wB/I0/j+1p2lK/ZCFla3PBNPQhVCp2gVKZshCsg4rlzjCRCkK7HPMLMt72Kph22sIQrw/aF9P0r2DLB3An6+xQhbHnPGu24jE25KFhzZKhAdc1FfuhCZirso4QhBP/Z",
      name: "Dr. Hemant Yadav",
      specialization: "MBBS (senior surgeon)",
      experience: "4 years of experience",
    },
    {
      id: 6,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6qUm_aWRq2c0XPTY8rspVrRFrvBCEbGx6Q&usqp=CAU",
      name: "Dr. Abhijeet Kumar",
      specialization: "MBBS (multispecialist)",
      experience: "6 years of experience",
    },
    {
      id: 7,
      imgSrc:
        "https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=",
      name: "Dr. Satya Kumar",
      specialization: "MBBS (Physician)",
      experience: "4 years of experience",
    },
    {
      id: 8,
      imgSrc:
        "https://img.freepik.com/premium-photo/woman-with-very-pretty-face-very-nice-hair_871710-44992.jpg",
      name: "Dr. Swati Kumari",
      specialization: "MBBS (Junior surgeon)",
      experience: "2 years of experience",
      
    },
  ];
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
    <Box>
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

     

{/* BookNow modal */}
<BookNow isOpen={isBookNowOpen} onClose={() => setIsBookNowOpen(false)} Name={Name} phone={phone} count={count} />
    </Box>
       <Box>
       <MeetNow/>
     </Box>

     <Box>
     <Slider items={items} />
     </Box>
<Box>
<Footer/>
</Box>
</Box>
  )
}

export default Home;
