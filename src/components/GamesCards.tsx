import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/Image-Url";

interface Props {
  game: Game;
}
const GamesCards = ({ game }: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GamesCards;
