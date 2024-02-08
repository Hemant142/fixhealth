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

  const handlePrev = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide);
  };

  const handleNext = () => {
    // Determine the number of items to slide based on the current screen size
    let itemsToShow = 4; // Default for laptop screen
    if (window.innerWidth < 1024 && window.innerWidth >= 768) {
      itemsToShow = 2; // Tablet screen
    } else if (window.innerWidth < 768) {
      itemsToShow = 1; // Mobile screen
    }

    // Update current slide based on the number of items to show
    setCurrentSlide(
      currentSlide === items.length - itemsToShow ? currentSlide : currentSlide + 1
    );
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
        <Box className="slider-inner" display="flex">
          {items.slice(currentSlide, currentSlide + 4).map((item) => (
            <Card
              key={item.id}
              flex="0 0 300px"
              m="10px"
              borderRadius="lg"
              boxShadow="md"
            >
              <Image
                maxH={"200px"}
                src={item.imgSrc}
                alt={item.name}
                borderTopRadius="lg"
              />
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
        marginBottom={"500px"}
        right="10"
        backgroundColor="grey"
        border="none"
        onClick={handleNext}
        disabled={currentSlide === items.length - 4} // Adjusted for dynamic itemsToShow
      >
        <ChevronRightIcon />
      </Button>
    </Box>
  );
};

export default Slider;
