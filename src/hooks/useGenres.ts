import useData from "./useData";

export interface Genre{
    id:number;
    name:string;
    image_background:string;
}

//  interface FetchGenresResponse{
//     count:number;
//     results:Genre[];
// }

const useGenres =()=> useData<Genre>("/genres")


// {

 
  //    const [genres, setGenres] = useState<Genre[]>([]);
  // const [error, setError] = useState();
  // const[isloading,setLoading]=useState(false);

  // useEffect(() => {
  //   const controller =new AbortController();
  //   setLoading(true);
  //   apiClient
  //     .get<FetchGenresResponse>("/genres",{signal:controller.signal})
  //     .then((res) => {
  //       setGenres(res.data.results);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       if (error instanceof CanceledError ) return;
  //     setError(error.message)
  //     setLoading(false);
  //   });

  //     return()=>controller.abort();
  // }, []);
  // return {genres,error,isloading};
// }

export default useGenres;