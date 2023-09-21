import React from "react";
import useGames from "../hooks/useGames";
import useGenres from "../hooks/useGenress";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
