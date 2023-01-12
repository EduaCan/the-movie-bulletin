import MovieList from "../../components/AppMovieList/MovieList"
import { useAppSelector } from "../../store/hooks"

export default function Upcoming() {

  const upcomingMovies = useAppSelector((state) => state.apiMovies.upcomingMovies)

  return (
    <>
      <MovieList moviesToList={upcomingMovies} title={'Upcoming Movies'} />
    </>
  )
}

