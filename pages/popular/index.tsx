import movieRaw from "../../interface/movieRaw"
import Tmdb from "../../services/tmdb.services"
import Image from "next/image"
import Link from "next/link"



export default function Popular({movies} : movieRaw) {

  // This is client call api
  // const [movies, setMovies] = useState([])

  // useEffect(()=> {
  //   getData()
  //   console.log(movies)
  // },[])

  // const getData = async () => {
  //   const res = await fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=b75586240b493bdf90f05932a64c4384&language=en-US&page=1`
  //     );
  //     const {results} = await res.json()
      
  //     setMovies(results)
  //     console.log(movies)
  //   }
  
  const imageSize = "w500" //move to better place
  return (
    <>
        <h1>Popular</h1>
        {movies.length === 0 ? <h3>no results</h3> :
        movies.map((movie : movieRaw)=> {
          return (
            <div key={movie.id}>
              <Link href={`/movie/${movie.id}`}>
                {movie.title}
              {/* <Image src={`https://image.tmdb.org/t/p/${imageSize}${movie.poster_path}`} alt={movie.original_title} fill={true}/> */}
              </Link>
            </div>
          )
        })
        }


      </>
    )
  }


  export async function getServerSideProps() {
     const apiTmdb =  new Tmdb()
     const {results}  = await apiTmdb.getPopularMovies()

     //Without service functs
    // const res = await fetch(
    //   `https://api.themoviedb.org/3/movie/popular?api_key=(SETKEYHERE)&language=en-US&page=1`
    // );
    // const {results} = await res.json()

  return {
    props: {
      movies: results
    },
  };
  }