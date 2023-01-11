import Image from 'next/image'
import { Inter } from '@next/font/google'
import Tmdb from '../services/tmdb.services'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { addPopularMovies } from '../redux/movieSlice'
import { movieListProps, movieReduced } from '../interface/movie'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ popularMovies }: movieListProps) {
  const dispatch = useAppDispatch()
  dispatch(addPopularMovies(popularMovies))

  return (
    <>
      <h1></h1>
    </>
  )
}

export async function getStaticProps() {
  const apiTmdb = new Tmdb()
  const { results } = await apiTmdb.getPopularMovies()

  const popularMovies = results.map(({ id, title, release_date, vote_average, poster_path, }: movieReduced) => {
    return { id, title, release_date, vote_average, poster_path }
  })

  return {
    props: {
      popularMovies
    },
  };
}
