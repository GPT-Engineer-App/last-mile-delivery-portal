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

      {}
      <VStack as="section" w="100%" py={16} spacing={8} bg="white" textAlign="center">
        <Heading as="h2" size="2xl">
          Welcome to Access Riders - Your Last Mile Delivery Partner!
        </Heading>
        <Text fontSize="lg" maxW="800px">
          Access Riders, a division of Access Capital Holdings, is your premier partner for last mile delivery solutions. Whether you're a business seeking reliable delivery services or a driver looking to join our network, Access Riders has the tools and expertise to meet your needs.
        </Text>
      </VStack>

      {}
      <VStack as="section" w="100%" py={16} spacing={8} bg="gray.100" textAlign="center">
        <Heading as="h3" size="xl">
          Why Choose Access Riders for Your Last Mile Deliveries?
        </Heading>
        <VStack spacing={4} maxW="800px">
          <Text fontSize="lg">Efficient Delivery Solutions: Our platform connects businesses with a network of skilled drivers and advanced driver management solutions, ensuring fast and efficient deliveries every time.</Text>
          <Text fontSize="lg">Driver Partnership Opportunities: Join our network of drivers and unlock endless earning potential. As an authorized Uber partner, Access Riders offers flexible opportunities for drivers to thrive in the delivery industry.</Text>
          <Text fontSize="lg">Comprehensive Driver Management: From onboarding to performance tracking, Access Riders provides comprehensive driver management solutions to streamline operations and maximize efficiency.</Text>
        </VStack>
      </VStack>

      {}
      <VStack as="section" w="100%" py={16} spacing={8} bg="white" textAlign="center">
        <Heading as="h3" size="xl">
          How Access Riders Works:
        </Heading>
        <VStack spacing={4} maxW="800px">
          <Text fontSize="lg">Partner with Us: Whether you're a business or a driver, partner with Access Riders to access our suite of delivery solutions and driver management tools.</Text>
          <Text fontSize="lg">Schedule Deliveries: Businesses can easily schedule deliveries through our platform, while drivers can choose their own schedules and earn on their terms.</Text>
          <Text fontSize="lg">Track Deliveries in Real-Time: Monitor the progress of your deliveries in real-time and receive notifications every step of the way for enhanced transparency and peace of mind.</Text>
          <Text fontSize="lg">Grow Your Business or Earnings: With Access Riders, businesses can expand their delivery capabilities, while drivers can increase their earnings and build a successful career in the delivery industry.</Text>
        </VStack>
      </VStack>

      {}
      <VStack as="section" w="100%" py={16} spacing={8} bg="gray.100" textAlign="center">
        <Heading as="h3" size="xl">
          Join the Access Riders Community Today!
        </Heading>
        <Text fontSize="lg" maxW="800px">
          Experience the convenience, reliability, and efficiency of Access Riders. Whether you're a business looking to streamline your delivery operations or a driver seeking flexible earning opportunities, we're here to help you succeed. Partner with Access Riders and take your delivery business to new heights!
        </Text>
      </VStack>

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
