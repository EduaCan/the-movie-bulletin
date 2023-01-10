import MovieList from "../../components/AppMovieList/MovieList"
import { movieListProps, movieReduced } from "../../interface/movie"
import Tmdb from "../../services/tmdb.services"

export default function Upcoming({movies}: movieListProps) {
    return (
      <>
        <MovieList movies={movies}/>
      </>
    )
  }

  export async function getStaticProps() {
    const apiTmdb = new Tmdb()
    const {results} = await apiTmdb.getUpcomingMovies()
    
     const movies = results.map(({id, title, release_date, vote_average, poster_path,}: movieReduced) => {
       return {id, title, release_date, vote_average, poster_path}
     })

    console.log(movies)
  
    return {
      props: {
        movies
      },
    };
  }