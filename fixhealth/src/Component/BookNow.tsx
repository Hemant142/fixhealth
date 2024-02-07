import React, { useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import {
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
  Button,
  Heading,
  Box,
  AspectRatio,
  Text,
} from "@chakra-ui/react";

interface BookNowProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookNow: React.FC<BookNowProps> = ({ isOpen, onClose }) => {
  const initialRef = useRef<HTMLInputElement | null>(null);
  const finalRef = useRef<HTMLButtonElement | null>(null);

  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [company, setCompany] = useState("");
  const [chiefComplaints, setChiefComplaints] = useState("");

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSave = () => {
    nextStep();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Heading as="h3" size="lg" textAlign="center" color={"#495770"}>
            {currentStep === 4 ? "" : "Book an Appointment for FREE"}
          </Heading>
          <Text fontSize='md' textAlign="center" color={"#388aaf"}> {currentStep === 4 ? "" :"60+ Expert Physioterapists for 200+ Conditions"}</Text>
          {currentStep === 1 && (
            <>
              <FormControl color={"#495770"}>
                <FormLabel >Your name</FormLabel>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4} color={"#495770"}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </FormControl>
            </>
          )}
          {currentStep === 2 && (
            <>
              <FormControl mt={4} color={"#495770"}>
                <FormLabel>Age</FormLabel>
                <Input
                  type="text"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4} color={"#495770"}>
                <FormLabel>City</FormLabel>
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </FormControl>
            </>
          )}
          {currentStep === 3 && (
            <>
              <FormControl mt={4} color={"#495770"}>
                <FormLabel>Company</FormLabel>
                <Input
                  type="text"
                  placeholder="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Chief complaints</FormLabel>
                <Input
                  type="text"
                  placeholder="Chief complaints"
                  value={chiefComplaints}
                  onChange={(e) => setChiefComplaints(e.target.value)}
                />
              </FormControl>
            </>
          )}

          {currentStep === 4 && (
            <>
              <Box width="100%" margin={"auto"}>
                <AspectRatio ratio={4/3}>
                  <iframe
                    title="Completed"
                    src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/media/90211520c82920dcaf6aea7604aeb029.gif"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
              <Box textAlign="center">
                <Heading as="h3" size="lg" mt={4} color="#12dc6c">
                  Thank you, {name}
                </Heading>
                <Heading as="h5" size="sm" color="#12dc6c">
                  Your Appointment is Booked
                </Heading>
                <Text fontSize="sm" color="gray" mt={4}>
                  We will{" "}
                  
                 
                  <Box as="span" fontWeight="bold" color="black">
                  {/* <IoLogoWhatsapp color="green" style={{ verticalAlign: "middle",  border:"2px solid red" }} /> */}
   
                   WhatsApp
                  </Box>{" "}
                  you the appointment details on the number provided.
                </Text>
              </Box>
            </>
          )}
        </ModalBody>

        <ModalFooter>
          {currentStep > 1 && currentStep < 4 && (
            <Button colorScheme="blue" mr={3} onClick={prevStep}>
              Back
            </Button>
          )}

          {currentStep < 3 && (
            <Button colorScheme="blue" mr={3} onClick={nextStep}>
              Next
            </Button>
          )}
          {currentStep === 3 && (
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BookNow;
