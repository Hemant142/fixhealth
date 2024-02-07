// Navbar.tsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FiHome } from "react-icons/fi";
import { MdMedicalServices } from "react-icons/md";
import { PiStethoscopeFill } from "react-icons/pi";
import { CgLoadbarDoc } from "react-icons/cg";
import { LiaAddressCard } from "react-icons/lia";
import { PiBookOpenText } from "react-icons/pi";
import BookNow from "./BookNow";

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="9"
        // border={"2px solid red"}
        // Change background color based on scroll position
        transition="background-color 0.3s"
      >
        <Flex
          p="4"
          color="white"
          alignItems="center"
          marginBottom={"8"}
          boxShadow="md"
          bg={scrollPosition > 0 ? "gray.900" : "transparent"} 
        //   border={"2px solid blue"}
        >
          {/* Burger Menu for Tablet and Mobile Screens */}
          <Box display={{ base: "block", lg: "none" }} marginRight={"4"}>
            <Box
              aria-label="Open Menu"
              backgroundColor={"transparent"}
              onClick={onToggle}
            >
              <HamburgerIcon color={"white"} />
            </Box>
          </Box>
          {/* Logo */}
          <Box
            flex={{ base: "1", md: "auto" }}
            display="flex"
            justifyContent="flex-start"
          >
            <Link to={"/"}>
              <Box display={{ base: "block", md: "block" }}>
                <Box
                  display={"flex"}
                  className={"logo"}
                  justifyContent={{ base: "center", md: "flex-start" }}
                >
                  <Box border={"1px solid #87adeb"} bg={"white"} p="2">
                    <Heading
                      as="h3"
                      size={{ base: "sm", md: "md" }}
                      color={"#87adeb"}
                    >
                      Fix
                    </Heading>
                  </Box>
                  <Box border={"1px solid #87adeb"} bg={"#87adeb"} p="2">
                    <Heading
                      as="h3"
                      size={{ base: "sm", md: "md" }}
                      color={"white"}
                    >
                      Health
                    </Heading>
                  </Box>
                </Box>
                <Box display={{ base: "none", md: "flex" }}>
                  <Text fontSize="xs" size={"xs"} ml={2}>
                    previously YourPhysio
                  </Text>
                </Box>
              </Box>
            </Link>
          </Box>

          {/* Laptop Screen */}
          <Box display={{ base: "none", lg: "block" }}>
            <Flex p="4" color="white" alignItems="center">
              <Box ml={"4"}>
                <Link to={"/"}>Home</Link>
              </Box>
              <Box ml={"4"}>
                <Link to={"/services"}>Services</Link>
              </Box>
              <Box ml={"4"}>
                <Link to={"/blogs"}>Blogs</Link>
              </Box>
              <Box ml={"4"}>
                <Link to={"/about"}>About</Link>
              </Box>
            </Flex>
          </Box>

          {/* Book Now Button */}
          <Box
            display={{ base: "flex", md: "flex" }}
            ml={{ base: "auto", md: "0" }}
          >
            <Button colorScheme="blue" ml={{ base: "auto", md: "0" }} onClick={onModalOpen}>
              Book Now
            </Button>
          </Box>
          {/* Mobile Menu */}
          <Drawer placement="left" onClose={onToggle} isOpen={isOpen}>
            <DrawerOverlay>
              <DrawerContent
                zIndex="10"
                borderRightRadius={"15px"}
                bg="gray.800"
                color={"white"}
              >
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>
                <DrawerBody>
                  <Flex flexDirection="column">
                    <Box mt={{ base: 4, md: 0 }} ml={{ md: "4" }} mb={"4"}>
                      <Link to={"/"}>
                        <Flex alignItems="center">
                          <FiHome />
                          <Text ml={2}>Home</Text>
                        </Flex>
                      </Link>
                    </Box>
                    <Box mt={{ base: 4, md: 0 }} ml={{ md: "4" }} mb={"4"}>
                      <Link to={"/services"}>
                        <Flex alignItems="center">
                          <MdMedicalServices />
                          <Text ml={2}>Services</Text>
                        </Flex>
                      </Link>
                    </Box>
                    <Box mt={{ base: 4, md: 0 }} ml={{ md: "4" }} mb={"4"}>
                      <Link to={"/"}>
                        <Flex alignItems="center">
                          <PiStethoscopeFill />
                          <Text ml={2}>Clinical Team</Text>
                        </Flex>
                      </Link>
                    </Box>
                    <Box mt={{ base: 4, md: 0 }} ml={{ md: "4" }} mb={"4"}>
                      <Link to={"/blogs"}>
                        <Flex alignItems="center">
                          <CgLoadbarDoc />
                          <Text ml={2}>Blogs</Text>
                        </Flex>
                      </Link>
                    </Box>
                    <Box mt={{ base: 4, md: 0 }} ml={{ md: "4" }} mb={"4"}>
                      <Link to={"/about"}>
                        <Flex alignItems="center">
                          <LiaAddressCard />
                          <Text ml={2}>About</Text>
                        </Flex>
                      </Link>
                    </Box>
                    <Box mt={{ base: 4, md: 0 }} ml={{ md: "4" }} mb={"4"}>
                      <Link to={"/about"}>
                        <Flex alignItems="center">
                          <PiBookOpenText />
                          <Text ml={2}>Patient Stories</Text>
                        </Flex>
                      </Link>
                    </Box>
                  </Flex>
                </DrawerBody>
                <DrawerFooter margin={"auto"}>
                  <Box
                    textAlign={"center"}
                    borderTop={"1px solid gray"}
                    width={"100%"}
                    paddingTop={"20px"}
                  >
                    <Heading as="h5" size="sm" color={"gray"}>
                      Fix Health
                    </Heading>
                    <Text fontSize="xs" fontWeight={"bold"} mt={1}>
                      20,000+ patients, 9.6/10 rating
                    </Text>
                  </Box>
                </DrawerFooter>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Flex>
      </Box>
      <BookNow isOpen={isModalOpen} onClose={onModalClose} />
    </>
  );
};

export default Navbar;
