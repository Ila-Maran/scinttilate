import { Box, Text, Badge, Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Heart } from "react-feather";

const CharacterCard = ({
  people,
  addToFavorites,
  favorites,
  isOpen,
  onOpen,
  onClose,
  btnRef,
  setSelectedPerson,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      bg="white"
      color="gray.800"
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text fontSize="3xl" fontWeight="bold" mb={2} color="teal.500">
          {people.name}
        </Text>
        <button onClick={() => addToFavorites(people.name)}>
          <Icon
            as={Heart}
            color={favorites?.includes(people.name) ? "red" : "grey"}
            boxSize={6}
          />
        </button>
      </Box>
      <button
        ref={btnRef}
        colorScheme="teal"
        onClick={() => {
          onOpen();
          setSelectedPerson(people);
        }}
      >
        View More
      </button>
    </Box>
  );
};

export default CharacterCard;
