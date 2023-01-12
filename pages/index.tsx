// import { Inter } from '@next/font/google'
import Tmdb from '../services/tmdb.services'
import { useAppDispatch } from '../store/hooks'
import { addPopularMovies, addUpcomingMovies } from '../redux/movieSlice'
import { movieListProps, movieReduced } from '../interface/movie'
import MovieList from '../components/AppMovieList/MovieList'
import styles from './home.module.css'
import Movie from '../components/AppMovie/Movie'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ popularMovies, upcomingMovies }: movieListProps) {
  const dispatch = useAppDispatch()
  dispatch(addPopularMovies(popularMovies))
  dispatch(addUpcomingMovies(upcomingMovies))


  return (
    <>
    <div className={styles.container}>
      <Movie details={popularMovies[0]} />
    <div className={styles.main}>
      <h1>Popular</h1>
      <MovieList moviesToList={popularMovies} />
      <h1>Upcoming</h1>
      <MovieList moviesToList={upcomingMovies} />
      <h1>Favorites</h1>
      <p>Comming soon</p>
    </div>
    </div>
    </>
  )
}

export async function getStaticProps() {
  const apiTmdb = new Tmdb()
  const { results : apiPopularMovies } = await apiTmdb.getPopularMovies()
  const {results : apiUpcomingMovies } = await apiTmdb.getUpcomingMovies()

  const popularMovies = apiPopularMovies.map(({ id, title, release_date, vote_average, poster_path, backdrop_path, overview }: movieReduced) => {
    return { id, title, release_date, vote_average, poster_path, backdrop_path, overview }
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
