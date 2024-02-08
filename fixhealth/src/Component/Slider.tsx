import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface SliderProps {
  items: {
    id: number;
    imgSrc: string;
    name: string;
    specialization: string;
    experience: string;
  }[];
}

const Slider: React.FC<SliderProps> = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide,"gesa")

  const handlePrev = () => {
    setCurrentSlide(currentSlide >0 ? currentSlide - 1:currentSlide );
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === items.length - 4 ? currentSlide : currentSlide + 1);
  };

  return (
    <Box
      className="slider-container"
      mt="50px"
      w="90%"
      overflow="hidden"
      mx="auto"
      mb={"50px"}
    >
      <Box className="slider" display="flex" transition="transform 0.5s ease">
        <Box
          className="slider-inner"
          display="flex"
        >
          {items.slice(currentSlide, currentSlide + 4).map((item) => (
            <Card
              key={item.id}
              flex="0 0 300px"
              m="10px"
              borderRadius="lg"
              boxShadow="md"
            >
              <Image maxH={"200px"} src={item.imgSrc} alt={item.name} borderTopRadius="lg" />
              <CardBody>
                <Stack spacing="2">
                  <Heading as="h3" size="md">
                    {item.name}
                  </Heading>
                  <Text>{item.specialization}</Text>
                  <Text color="blue.600" fontSize="lg">
                    {item.experience}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2" margin={"auto"}>
                  <Button variant="solid" colorScheme="blue">
                    Know more
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </Box>
      </Box>
      <Button
        className="slider-btn-prev"
        position="absolute"
        transform="translate(-50%,-50%)"
        borderRadius={"50%"}
        // top="50%"
        left="10"
        backgroundColor="grey"
        border="none"
        onClick={handlePrev}
        disabled={currentSlide === 0}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        className="slider-btn-next"
        position="absolute"
        transform="translate(-50%,-50%)"
        borderRadius={"50%"}
        // top=""
        right="10"
        backgroundColor="grey"
        border="none"
        onClick={handleNext}
        disabled={currentSlide ==6}
      >
        <ChevronRightIcon />
      </Button>
    </Box>
  );
};

export default Slider;
