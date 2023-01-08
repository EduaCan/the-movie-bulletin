import movieRaw from "../../interface/movieRaw"
import Tmdb from "../../services/tmdb.services"
import MovieList from "../../components/AppMovieList/MovieList"



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
    <section>
        <h1>Popular</h1>
        <MovieList movies={movies}/>

</section>
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