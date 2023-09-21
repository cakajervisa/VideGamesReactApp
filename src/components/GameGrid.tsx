import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GamesCards from "./GamesCards";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {games.map((game) => (
          <GamesCards key={game.id} game={game}></GamesCards>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
