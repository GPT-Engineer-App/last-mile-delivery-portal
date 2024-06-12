import React from "react";
import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaTruck, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Flex as="header" w="100%" p={4} bg="blue.500" color="white" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Last Mile Delivery
        </Heading>
        <HStack spacing={4}>
          <Button variant="ghost" colorScheme="whiteAlpha">
            Home
          </Button>
          <Button variant="ghost" colorScheme="whiteAlpha">
            Services
          </Button>
          <Button variant="ghost" colorScheme="whiteAlpha">
            Contact
          </Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex as="section" w="100%" h="60vh" bg="gray.100" justifyContent="center" alignItems="center" direction="column" textAlign="center" p={4}>
        <Heading as="h2" size="2xl" mb={4}>
          Fast and Reliable Last Mile Delivery
        </Heading>
        <Text fontSize="lg" mb={6}>
          We ensure your packages are delivered on time, every time.
        </Text>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </Flex>

      {/* Services Section */}
      <VStack as="section" w="100%" py={16} spacing={8} bg="white" textAlign="center">
        <Heading as="h3" size="xl">
          Our Services
        </Heading>
        <HStack spacing={8} justifyContent="center">
          <Box w="300px" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <IconButton aria-label="Delivery" icon={<FaTruck />} size="lg" mb={4} colorScheme="blue" />
            <Heading as="h4" size="md" mb={2}>
              Same Day Delivery
            </Heading>
            <Text>Get your packages delivered on the same day with our express service.</Text>
          </Box>
          <Box w="300px" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <IconButton aria-label="Tracking" icon={<FaTruck />} size="lg" mb={4} colorScheme="blue" />
            <Heading as="h4" size="md" mb={2}>
              Real-Time Tracking
            </Heading>
            <Text>Track your packages in real-time with our advanced tracking system.</Text>
          </Box>
          <Box w="300px" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <IconButton aria-label="Support" icon={<FaTruck />} size="lg" mb={4} colorScheme="blue" />
            <Heading as="h4" size="md" mb={2}>
              24/7 Support
            </Heading>
            <Text>Our support team is available 24/7 to assist you with any queries.</Text>
          </Box>
        </HStack>
      </VStack>

      {/* Contact Section */}
      <VStack as="section" w="100%" py={16} spacing={8} bg="gray.100" textAlign="center">
        <Heading as="h3" size="xl">
          Contact Us
        </Heading>
        <Stack direction={["column", "row"]} spacing={8} justifyContent="center">
          <Box w="300px" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <IconButton aria-label="Phone" icon={<FaPhone />} size="lg" mb={4} colorScheme="blue" />
            <Heading as="h4" size="md" mb={2}>
              Phone
            </Heading>
            <Text>+1 234 567 890</Text>
          </Box>
          <Box w="300px" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" mb={4} colorScheme="blue" />
            <Heading as="h4" size="md" mb={2}>
              Email
            </Heading>
            <Text>info@lastmiledelivery.com</Text>
          </Box>
          <Box w="300px" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <IconButton aria-label="Address" icon={<FaMapMarkerAlt />} size="lg" mb={4} colorScheme="blue" />
            <Heading as="h4" size="md" mb={2}>
              Address
            </Heading>
            <Text>123 Delivery Lane, City, Country</Text>
          </Box>
        </Stack>
        <Box w="100%" maxW="600px" p={4} borderWidth="1px" borderRadius="lg" bg="white">
          <VStack spacing={4}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button colorScheme="blue" size="lg">
              Send Message
            </Button>
          </VStack>
        </Box>
      </VStack>

      {/* Footer */}
      <Flex as="footer" w="100%" p={4} bg="blue.500" color="white" justifyContent="center">
        <Text>&copy; {new Date().getFullYear()} Last Mile Delivery. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;
