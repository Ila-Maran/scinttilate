import { Box, Text, Badge, Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Heart } from "react-feather";

const CharacterCard = ({ people, addToFavorites, favorites }) => {
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
      <button onClick={() => addToFavorites(people.name)}>
        <Icon
          as={Heart}
          color={favorites.includes(people.name) ? "red" : "grey"}
          boxSize={6}
        />
      </button>

      <Text fontSize="3xl" fontWeight="bold" mb={2} color="teal.500">
        {people.name}
      </Text>
      <Text fontSize="lg" color="gray.500">
        Gender: {people.gender}
      </Text>
      <Text fontSize="lg" color="gray.500">
        Height: {people.height} cm
      </Text>
      <Text fontSize="lg" color="gray.500">
        Mass: {people.mass} kg
      </Text>
      <Text fontSize="lg" color="gray.500">
        Hair Color: {people.hair_color}
      </Text>
      <Text fontSize="lg" color="gray.500">
        Skin Color: {people.skin_color}
      </Text>
      <Text fontSize="lg" color="gray.500">
        Eye Color: {people.eye_color}
      </Text>
      <Text fontSize="lg" color="gray.500">
        Birth Year: {people.birth_year}
      </Text>
      <Badge colorScheme="teal" fontSize="lg" mt={2}>
        Homeworld:{" "}
        <Link href={people.homeworld} isExternal color="teal.500">
          Homeworld
        </Link>
      </Badge>

      <Text fontSize="lg" fontWeight="bold" mt={4} color="teal.500">
        Featured In:
      </Text>
      <Box display="flex" flexWrap="wrap">
        {people?.films.map((film, index) => (
          <Badge key={index} colorScheme="blue" fontSize="lg" mr={2} mb={2}>
            <Link href={film} isExternal color="blue.500">
              Film {index + 1}
            </Link>
          </Badge>
        ))}
      </Box>

      <Text fontSize="lg" fontWeight="bold" mt={4} color="teal.500">
        Vehicles:
      </Text>
      <Box display="flex" flexWrap="wrap">
        {people?.vehicles.map((vehicle, index) => (
          <Badge key={index} colorScheme="green" fontSize="lg" mr={2} mb={2}>
            <Link href={vehicle} isExternal color="green.500">
              Vehicle {index + 1}
            </Link>
          </Badge>
        ))}
      </Box>

      <Text fontSize="lg" fontWeight="bold" mt={4} color="teal.500">
        Starships:
      </Text>
      <Box display="flex" flexWrap="wrap">
        {people?.starships.map((starship, index) => (
          <Badge key={index} colorScheme="purple" fontSize="lg" mr={2} mb={2}>
            <Link href={starship} isExternal color="purple.500">
              Starship {index + 1}
            </Link>
          </Badge>
        ))}
      </Box>
    </Box>
  );
};

export default CharacterCard;
