import  { movieListProps, movieReduced } from "../../interface/movie"
import Tmdb from "../../services/tmdb.services"
import MovieList from "../../components/AppMovieList/MovieList"
import { useAppSelector } from "../../store/hooks"

export default function Popular() {

  const popularMovies = useAppSelector((state) => state.popularMovies.value)
  console.log(popularMovies)

  return (
    <>
      <section>
        <h1>Popular</h1>
        <MovieList popularMovies={popularMovies}/>
      </section>
    </>
  )
}
