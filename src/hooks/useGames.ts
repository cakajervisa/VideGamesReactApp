import { GameQuery } from '../App';
import useData from './useData';
import { Genre } from './useGenres';

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

const useGames = (gameQuery: GameQuery) => {
  const genreId = gameQuery.genre ? gameQuery.genre.id : null;

  return useData<Game>('/games', {
    params: {
      genres: genreId,
      search:gameQuery.searchText
    },
  }, [gameQuery]);
};



export default useGames;
