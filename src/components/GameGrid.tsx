import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../Services/api-client";
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();

  interface Game {
    id: number;
    name: string;
  }

  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
