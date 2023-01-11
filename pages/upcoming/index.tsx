import MovieList from "../../components/AppMovieList/MovieList"
// import { movieListProps, movieReduced } from "../../interface/movie"
// import Tmdb from "../../services/tmdb.services"
import { useAppSelector } from "../../store/hooks"

export default function Upcoming() {

  const upcomingMovies = useAppSelector((state) => state.apiMovies.upcomingMovies)

  return (
    <>
      <MovieList moviesToList={upcomingMovies} />
    </>
  )
}

