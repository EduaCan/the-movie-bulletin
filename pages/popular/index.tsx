import  { movieListProps, movieReduced } from "../../interface/movie"
import Tmdb from "../../services/tmdb.services"
import MovieList from "../../components/AppMovieList/MovieList"

export default function Popular({ movies }: movieListProps) {

  return (
    <>
      <section>
        <h1>Popular</h1>
        <MovieList movies={movies}/>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const apiTmdb = new Tmdb()
  const { results} = await apiTmdb.getPopularMovies()
  
   const movies = results.map(({id, title, release_date, vote_average, poster_path}: movieReduced) => {
     return {id, title, release_date, vote_average, poster_path}
   })

  return {
    props: {
      movies
    },
  };
}