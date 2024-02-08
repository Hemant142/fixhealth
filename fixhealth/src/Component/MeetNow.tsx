import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Slider from "./Slider";
// import { Slider } from './Slider';

const MeetNow = () => {
  const items = [
    {
      id: 1,
      imgSrc:
        "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?size=626&ext=jpg&ga=GA1.1.784249210.1705073781&semt=sph",
      name: "Dr. Ganesh Kumar",
      specialization: "MBBS (senior surgeon)",
      experience: "8 years of experience",
    },
    {
      id: 2,
      imgSrc:
        "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?size=626&ext=jpg&ga=GA1.1.784249210.1705073781&semt=sph",
      name: "Dr. Simpi Kumari",
      specialization: "MBBS (MultiSpecialist)",
      experience: "5 years of experience",
    },
    {
      id: 3,
      imgSrc:
        "https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-66963.jpg?size=626&ext=jpg&ga=GA1.1.784249210.1705073781&semt=sph",
      name: "Dr. Shriya Pandey",
      specialization: "MPTh (Musculoskeletal)",
      experience: "3 years of experience",
    },
    {
      id: 4,
      imgSrc:
        "https://img.freepik.com/free-photo/young-lady-looking-pointing-copy-space_171337-5771.jpg?size=626&ext=jpg&ga=GA1.1.784249210.1705073781&semt=sph",
      name: "Dr. Priya Kumari",
      specialization: "MBBS (General Physician)",
      experience: "3 years of experience",
    },
    {
      id: 5,
      imgSrc:
        "https://img.freepik.com/free-photo/portrait-3d-male-doctor_23-2151106734.jpg?size=626&ext=jpg&ga=GA1.1.784249210.1705073781&semt=sph",
      name: "Dr. Hemant Yadav",
      specialization: "MBBS (senior surgeon)",
      experience: "4 years of experience",
    },
    {
      id: 6,
      imgSrc:
        "https://img.freepik.com/premium-photo/portrait-happy-successful-hindu-doctor-young-medical-practitioner-smiling-looking_321831-17342.jpg?size=626&ext=jpg&ga=GA1.1.784249210.1705073781&semt=sph",
      name: "Dr. Abhijeet Kumar",
      specialization: "MBBS (multispecialist)",
      experience: "6 years of experience",
    },
    {
      id: 7,
      imgSrc:
        "https://img.freepik.com/free-photo/doctors-day-handsome-brunette-cute-guy-medical-gown-with-crossed-hands_140725-162942.jpg?size=626&ext=jpg&ga=GA1.1.784249210.1705073781&semt=sph",
      name: "Dr. Satya Kumar",
      specialization: "MBBS (Physician)",
      experience: "4 years of experience",
    },
    {
      id: 8,
      imgSrc:
        "https://img.freepik.com/free-photo/portrait-doctor_144627-39390.jpg?size=626&ext=jpg&ga=GA1.1.784249210.1705073781&semt=sph",
      name: "Dr. Swati Kumari",
      specialization: "MBBS (Junior surgeon)",
      experience: "2 years of experience",
    },
  ];
  return (
    <Box boxSizing="border-box" marginTop={"10"} marginBottom={"10"}>
      <Box textAlign={"center"}>
        <Box>
          <Heading
            color={"#87adeb"}
            fontSize={{ base: "25px", sm: "20px", md: "40px", lg: "40px" }}
          >
            Meet our Experts
          </Heading>
          <Text
          color="white"
            fontWeight={{
              base: "600",
              sm: "600",
              md: "700",
              lg: "700",
              "2xl": "700",
            }}
            lineHeight={{
              base: "30px",
              sm: "none",
              md: "60px",
              lg: "60px",
              "2xl": "60px",
            }}
            fontSize={"18px"}
          >
            Experience the Benefits of Advanced Technology and Expert Care
          </Text>
        </Box>

        <Box>
          {/* <Text>Crousal</Text> */}
          <Slider items={items} />
        </Box>
        <Box textAlign={"center"}>
          <Button
            // background={"#00acc1"}
            colorScheme="blue"
            color={"white"}
            padding={{
              base: "5px 100px",
              sm: "5px 100px",
              md: "0px 60px",
              lg: "0px 60px",
              "2xl": "0px 60px",
            }}
            marginTop={"30px"}
          >
            {" "}
            Meet Team
          </Button>
          <Text
            color={"#87adeb"}
            marginTop={"50px"}
            fontSize={"25px"}
            fontWeight={"bold"}
          >
            Patient Recovery Stories
          </Text>
          <Text color="white" fontWeight={"bold"} lineHeight={{ base: "50px" }}>
            Don't just take our word for it
          </Text>
          <Box
            border={{
              base: "none",
              sm: "none",
              md: "1px solid teal",
              lg: "1px solid teal",
              "2xl": "1px solid teal",
            }}
            marginTop={"50px"}
            width={{
              base: "92%",
              sm: "92%",
              md: "85%",
              lg: "80%",
              "2xl": "80%",
            }}
            margin={"auto"}
            display={"flex"}
            justifyContent={"space-around"}
            backgroundColor={"#f3fbfc"}
            padding={"10px 0px"}
            textAlign={"center"}
          >
            <Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"50%"}
                padding={"12px"}
                fontSize={"32px"}
                color={"white"}
                backgroundColor={"#009db0"}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                </svg>
              </Box>
              <Box>
                <Text fontWeight={"bold"} marginTop={"10px"}>
                  20000+
                </Text>
                <Text>Patients</Text>
              </Box>
            </Box>

            <Box>
              {" "}
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"50%"}
                padding={"12px"}
                fontSize={"32px"}
                color={"white"}
                backgroundColor={"#009db0"}
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </Box>
              <Box>
                {" "}
                <Text fontWeight={"bold"} marginTop={"10px"}>
                  1 lakh+
                </Text>
                <Text>Sessions</Text>
              </Box>
            </Box>
            <Box>
              {" "}
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"50%"}
                padding={"10px"}
                fontSize={"32px"}
                color={"white"}
                backgroundColor={"#009db0"}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                  <circle cx="8.5" cy="10.5" r="1.5"></circle>
                  <circle cx="15.493" cy="10.493" r="1.493"></circle>
                  <path d="M12 18c4 0 5-4 5-4H7s1 4 5 4z"></path>
                </svg>
              </Box>
              <Box>
                <Text fontWeight={"bold"} marginTop={"10px"}>
                  9.6/10
                </Text>
                <Text>Avg. Rating</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MeetNow;
