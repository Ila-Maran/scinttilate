import React from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  Button,
  useColorMode,
} from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      backgroundColor={colorMode === "light" ? "blue.500" : "purple.500"}
      color="white"
      p={4}
      boxShadow="md"
    >
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          Star Wars
        </Text>
        <Spacer />
        <Button
          onClick={toggleColorMode}
          bgColor={colorMode === "light" ? "white" : "gray.800"}
          color={colorMode === "light" ? "gray.800" : "white"}
        >
          Toggle Theme
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
