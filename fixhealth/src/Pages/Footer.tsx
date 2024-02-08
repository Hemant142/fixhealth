import { Box, Flex, Heading, Link, Image, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import { Link } from "react-router-dom";
const Footer: React.FC = () => {
    return (
        <Box  color="white" py={10} px={4}>
            <Flex flexWrap="wrap" justifyContent="space-between" alignItems="flex-start">
                <Box flexBasis={{base: "100%", md: "auto"}}>
                    {/* <Flex justifyContent="center" mb={6}>
                        <Image src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_white_6p2ZETYLi.svg" alt="" />
                    </Flex> */}
                     <Box
            flex={{ base: "1", md: "auto" }}
            display="flex"
            justifyContent="flex-start"
          >
            <Link href={"/"}>
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
                    
                    <Flex flexWrap="wrap" justifyContent="space-between" marginTop={10} >
                        <Flex flexDir="column" mb={{base: 6, md: 0}} mr={{base: 0, md: 6, lg:200}} flexBasis={{base: "100%", md: "auto"}}>
                            <Heading as="h3" size="md" mb={4}>Fix Health</Heading>
                            <Link href="#" color="white" mb={2}>Product</Link>
                            <Link href="#" color="white" mb={2}>Blogs</Link>
                            <Link href="#" color="white" mb={2}>Privacy Policy</Link>
                            <Link href="#" color="white" mb={2}>Terms & Conditions</Link>
                        </Flex>
                        <Flex flexDir="column" mb={{base: 6, md: 0}} mr={{base: 0, md: 6,  lg:200}} flexBasis={{base: "100%", md: "auto"}}>
                            <Heading as="h3" size="md" mb={4}>Company</Heading>
                            <Link href="#" color="white" mb={2}>About Us</Link>
                            <Link href="#" color="white" mb={2}>Careers</Link>
                            <Link href="#" color="white" mb={2}>Contact</Link>
                        </Flex>
                        <Flex flexDir="column" mb={{base: 6, md: 0}} mr={{base: 0, md: 6, lg:200}} flexBasis={{base: "100%", md: "auto"}}>
                            <Heading as="h3" size="md" mb={4}>Services</Heading>
                            <Link href="#" color="white" mb={2}>Knee Pain</Link>
                            <Link href="#" color="white" mb={2}>Neck Pain</Link>
                            <Link href="#" color="white" mb={2}>Back Pain</Link>
                            <Link href="#" color="white" mb={2}>Shoulder Pain</Link>
                            <Link href="#" color="white" mb={2}>Ankle and Foot Pain</Link>
                            <Link href="#" color="white" mb={2}>All Services</Link>
                        </Flex>
                        <Flex flexDir="column" mb={{base: 6, md: 0}} flexBasis={{base: "100%", md: "auto"}}>
                            <Heading as="h3" size="md" mb={4}>Conditions</Heading>
                            <Link href="#" color="white" mb={2}>Spondylosis</Link>
                            <Link href="#" color="white" mb={2}>ACL Tear</Link>
                            <Link href="#" color="white" mb={2}>Achilles Tendonitis</Link>
                            <Link href="#" color="white" mb={2}>Plantar Fasciitis</Link>
                            <Link href="#" color="white" mb={2}>All Conditions</Link>
                        </Flex>
                    </Flex>
                </Box>

                
                <Flex flexDir="column" alignItems="center" mt={{base: 6, md: 0}} >
                    <Flex mb={6}>
                        <Link href="#" target="_blank" aria-label="Facebook" mx={2}>
                            <FaFacebook />
                        </Link>
                        <Link href="#" target="_blank" aria-label="Twitter" mx={2}>
                            <FaTwitter />
                        </Link>
                        <Link href="#" target="_blank" aria-label="Instagram" mx={2}>
                            <FaInstagram />
                        </Link>
                        <Link href="#" target="_blank" aria-label="LinkedIn" mx={2}>
                            <FaLinkedin />
                        </Link>
                    </Flex>
                    <Box color="#ccc" fontSize="sm" textAlign="center">
                        © 2023. FixHealth.com | Illustrations designed by <Link href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" color="inherit">freepik</Link>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Footer;
