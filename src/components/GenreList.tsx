// import React from "react";
// import useGames from "../hooks/useGames";
import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Spinner,
  SelectField,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/Image-Url";
// import useData from "../hooks/useData";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectGenre: Genre | null;
}

const GenreList = ({ selectGenre, onSelectGenre }: Props) => {
  const { data, isloading, error } = useGenres();
  if (error) return null;
  if (isloading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Button
              fontWeight={genre.id === selectGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
