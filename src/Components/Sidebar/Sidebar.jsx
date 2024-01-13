// Sidebar.js

import React from 'react';
import { Box, VStack, Image, Button, Icon, Hide, Flex } from '@chakra-ui/react';
import { FaHome, FaNewspaper, FaList, FaUser, FaBell, FaSignOutAlt, FaSearch } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <>

      <Hide below='md'>
        <Box bg="white" h="100%" w="70px" p="4" position="absolute" left="0" top="0">
          {/* Logo */}
          <Image src="/your-logo.png" alt="Logo" boxSize="40px" mb="4" _hover={{ filter: 'brightness(0) invert(1)' }} />

          {/* Search Button */}
          <Button variant="ghost" color="#aeaeae" mb="4" p="2">
            <Icon as={FaSearch} boxSize="20px" />
          </Button>

          {/* Navigation Buttons */}
          <VStack spacing="4" mt="2rem" mb="27rem">
            <Button variant="ghost" borderRadius={12} color="#aeaeae" p="2" _hover={{ bg: '#3e2edf', color: 'white' }}>
              <Icon as={FaHome} boxSize="20px" />
            </Button>
            <Button variant="ghost" borderRadius={12} color="#aeaeae" p="2" _hover={{ bg: '#3e2edf', color: 'white' }}>
              <Icon as={FaNewspaper} boxSize="20px" />
            </Button>
            <Button variant="ghost" borderRadius={12} color="#aeaeae" p="2" _hover={{ bg: '#3e2edf', color: 'white' }}>
              <Icon as={FaList} boxSize="20px" />
            </Button>
            <Button variant="ghost" borderRadius={12} color="#aeaeae" p="2" _hover={{ bg: '#3e2edf', color: 'white' }}>
              <Icon as={FaUser} boxSize="20px" />
            </Button>
          </VStack>

          {/* Notification and Logout Buttons */}
          <VStack spacing="4" mt="auto">
            <Button variant="ghost" borderRadius={12} color="#aeaeae" p="2" _hover={{ bg: '#3e2edf', color: 'white' }}>
              <Icon as={FaBell} boxSize="20px" />
            </Button>
            <Button variant="ghost" borderRadius={12} color="#aeaeae" p="2" _hover={{ bg: '#3e2edf', color: 'white' }}>
              <Icon as={FaSignOutAlt} boxSize="20px" />
            </Button>
          </VStack>
        </Box>
      </Hide>
      <Hide above='md'>
        <Flex
          align="end"
          justify="space-between"
          bg="white"
          p="5"
          position="fixed"
          top="0"
          pl={"21rem"}
          left="0"
          right="0"
          boxShadow="0px -2px 4px rgba(0, 0, 0, 0.1)"
        >
          {/* Navigation Buttons */}
          <Button pb={4} variant="ghost" borderRadius={12} color="#aeaeae" p="2" _hover={{ bg: '#3e2edf', color: 'white' }}>
            <Icon as={FaBell} boxSize="25px" />
          </Button>
        </Flex>
        <Flex
          align="center"
          justify="space-between"
          bg="white"
          p="4"
          position="fixed"
          bottom="0"
          left="0"
          right="0"
          boxShadow="0px -2px 4px rgba(0, 0, 0, 0.1)"
        >
          {/* Navigation Buttons */}
          <Button variant="ghost" borderRadius={10} color="#aeaeae" p="2" _hover={{ bg: '#3e2edf', color: 'white' }}>
            <Icon as={FaHome} boxSize="25px" />
          </Button>
          <Button variant="ghost" borderRadius={12} color="#aeaeae" p="2" _hover={{ bg: '#3e2edf', color: 'white' }}>
            <Icon as={FaNewspaper} boxSize="25px" />
          </Button>
          <Button variant="ghost" borderRadius={12} color="#aeaeae" p="2" _hover={{ bg: '#3e2edf', color: 'white' }}>
            <Icon as={FaList} boxSize="25px" />
          </Button>
          <Button variant="ghost" borderRadius={12} color="#aeaeae" p="2" _hover={{ bg: '#3e2edf', color: 'white' }}>
            <Icon as={FaUser} boxSize="25px" />
          </Button>

          {/* Search Button */}
          <Button variant="ghost" borderRadius={12} color="#aeaeae" p="2" _hover={{ bg: '#3e2edf', color: 'white' }}>
            <Icon as={FaSearch} boxSize="25px" />
          </Button>
        </Flex>
      </Hide>

    </>
  );
};

export default Sidebar;
