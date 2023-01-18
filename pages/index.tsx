// import { Inter } from '@next/font/google'
import Tmdb from '../services/tmdb.services'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addPopularMovies, addUpcomingMovies } from '../redux/movieSlice'
import { movieListProps, movieReduced } from '../interface/movie'
import MovieList from '../components/AppMovieList/MovieList'
import styles from './home.module.css'
import Movie from '../components/AppMovie/Movie'
import { randomInteger } from '../utils/randomInteger'
import {NextSeo} from 'next-seo';
import { useState } from 'react'

export default function Home({ popularMovies, upcomingMovies }: movieListProps) {
  const {favouriteMovies} = useAppSelector((state) => state.favouriteMovies.favouriteMovies)

  const dispatch = useAppDispatch()
  dispatch(addPopularMovies(popularMovies))
  dispatch(addUpcomingMovies(upcomingMovies))

  const [randomInt, setRandomInt] = useState(randomInteger(0, 19))

  return (
    <>
    <NextSeo
            title="Home | TMBulletin"
            description="Home of the movie bulletin page"
            />
      <div className={styles.container}>
        <Movie details={popularMovies[randomInt]} />
        <div className={styles.main}>
          <div>
            <MovieList moviesToList={popularMovies} title={'Top Popular movies'} />
          </div>
          <div>
            <MovieList moviesToList={upcomingMovies} title={'Top Upcoming movies'} />
          </div>
          <div>
          <MovieList moviesToList={favouriteMovies} title={'Top Favourites movies'} />
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const apiTmdb = new Tmdb()
  const { results: apiPopularMovies } = await apiTmdb.getPopularMovies()
  const { results: apiUpcomingMovies } = await apiTmdb.getUpcomingMovies()

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
