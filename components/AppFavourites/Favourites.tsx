import { useAppSelector } from "../../store/hooks"
import MovieList from "../AppMovieList/MovieList"

export default function Favourites() {
  const favouriteMovies = useAppSelector((state) => state.apiMovies.favouriteMovies)
    

    return (
      <>
        <MovieList moviesToList={favouriteMovies} title={'Popular Movies'} />
      </>
  
    )
  }