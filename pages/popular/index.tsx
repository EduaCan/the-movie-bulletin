import MovieList from "../../components/AppMovieList/MovieList"
import { useAppSelector } from "../../store/hooks"

export default function Popular() {

  const popularMovies = useAppSelector((state) => state.apiMovies.popularMovies)

  return (
    <>
      <section>
        <h1>Popular</h1>
        <MovieList moviesToList={popularMovies} />
      </section>
    </>
  )
}
