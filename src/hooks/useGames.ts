import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";


  export interface Game
   {
    id: number;
    name: string;
    background_image:string;
  }

//  interface FetchGamesResponse 
//   {
//     count: number;
//     results: Game[];
// }

 const useGames  =()=>useData<Game>("/games");
//  {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState();
//   const[isloading,setLoading]=useState(false);

//   useEffect(() => {
//     const controller =new AbortController();
//     setLoading(true);
//     apiClient
//       .get<FetchGamesResponse>("/games",{signal:controller.signal})
//       .then((res) => {
//         setGames(res.data.results);
//         setLoading(false);
//       })
//       .catch((error) => {
//         if (error instanceof CanceledError ) return;
//       setError(error.message)
//       setLoading(false);
//     });

//       return()=>controller.abort();
//   }, []);
//   return {games,error,isloading};
// }

export default useGames;