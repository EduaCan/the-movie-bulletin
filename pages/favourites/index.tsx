import { NextSeo } from 'next-seo'
import MovieList from '../../components/AppMovieList/MovieList'
import { useAppSelector } from '../../store/hooks'
import styles from './Favourites.module.css'


export default function Favourites() {

  const {favouriteMovies} = useAppSelector((state) => state.favouriteMovies.favouriteMovies)

  return (
    <>
                  <NextSeo
            title='Favourites | TMBulletin'
            description='List of your favorite movies'
            />
    <div className={styles.container}>
      <MovieList moviesToList={favouriteMovies} title={'Favourite movies'} />

    </div>
    </>
  )
}