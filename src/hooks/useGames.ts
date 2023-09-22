
import useData from "./useData";
import { Genre } from "./useGenres";


  export interface Game
   {
    id: number;
    name: string;
    background_image:string;
  }

 const useGames  =(selectedGenre:Genre | null) => useData<Game>("/games",{params: {genres:selectedGenre?.id}} ,[selectedGenre?.id]);

export default useGames;