
import MovieList from "../../components/AppMovieList/MovieList"
import { useAppSelector } from "../../store/hooks"

export default function Popular() {

  const popularMovies = useAppSelector((state) => state.apiMovies.popularMovies)

  return (
    <>
      <MovieList moviesToList={popularMovies} title={'Popular Movies'} />
    </>
  )
}
