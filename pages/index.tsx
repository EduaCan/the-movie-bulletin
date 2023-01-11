// import { Inter } from '@next/font/google'
import Tmdb from '../services/tmdb.services'
import { useAppDispatch } from '../store/hooks'
import { addPopularMovies, addUpcomingMovies } from '../redux/movieSlice'
import { movieListProps, movieReduced } from '../interface/movie'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ popularMovies, upcomingMovies }: movieListProps) {
  const dispatch = useAppDispatch()
  dispatch(addPopularMovies(popularMovies))
  dispatch(addUpcomingMovies(upcomingMovies))

  return (
    <>
      <h1></h1>
    </>
  )
}

export async function getStaticProps() {
  const apiTmdb = new Tmdb()
  const { results : apiPopularMovies } = await apiTmdb.getPopularMovies()
  const {results : apiUpcomingMovies } = await apiTmdb.getUpcomingMovies()

  const popularMovies = apiPopularMovies.map(({ id, title, release_date, vote_average, poster_path, }: movieReduced) => {
    return { id, title, release_date, vote_average, poster_path }
  })

  const upcomingMovies = apiUpcomingMovies.map(({ id, title, release_date, vote_average, poster_path, }: movieReduced) => {
    return { id, title, release_date, vote_average, poster_path }
  })

  return {
    props: {
      popularMovies,
      upcomingMovies
    },
  };
}
