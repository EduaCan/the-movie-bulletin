import MovieList from '../../components/AppMovieList/MovieList'
import { useAppSelector } from '../../store/hooks'
import styles from './Favourites.module.css'


export default function Favourites() {

  const {favouriteMovies} = useAppSelector((state) => state.favouriteMovies.favouriteMovies)

  return (
    <>
      <MovieList moviesToList={favouriteMovies} title={'Favourite movies'} />
    </>
  )
}