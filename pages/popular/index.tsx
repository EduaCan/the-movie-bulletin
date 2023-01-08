import movieRaw from "../../interface/movieRaw"
import Tmdb from "../../services/tmdb.services"
import Image from "next/image"
import Link from "next/link"



export default function Popular({movies} : movieRaw[]) {
  const imageSize = "w500" //move to better place
  return (
    <>
        <h1>Trending</h1>
        {movies.length === 0 ? <h3>no results</h3> :
        movies.map((movie : movieRaw)=> {
          return (
            <div key={movie.id}>
              <Link href={`/movie/${movie.id}`}>
                {movie.title}
              <Image src={`https://image.tmdb.org/t/p/${imageSize}${movie.poster_path}`} alt={movie.original_title} fill={true}/>
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
    const {results : movies}  = await apiTmdb.getPopularMovies()
  
  return {
    props: {
      movies,
    },
  };
  }