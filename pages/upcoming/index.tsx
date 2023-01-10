import MovieList from "../../components/AppMovieList/MovieList"
import { movieListProps, movieReduced } from "../../interface/movie"
import Tmdb from "../../services/tmdb.services"
import { useAppSelector } from "../../store/hooks"

export default function Upcoming() {

  const popularMovies = useAppSelector((state) => state.popularMovies.value)

    return (
      <>
        <MovieList popularMovies={popularMovies}/>
      </>
    )
  }

