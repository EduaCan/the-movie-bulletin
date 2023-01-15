
import MovieList from "../../components/AppMovieList/MovieList"
import { useAppSelector } from "../../store/hooks"
import Router from 'next/router';

export default function Popular() {

  const popularMovies = useAppSelector((state: any) => state.apiMovies.popularMovies)
  popularMovies.length === 0 && Router.push({
    pathname: '/',
  });

  return (
    <>
      <MovieList moviesToList={popularMovies} title={'Popular Movies'} />
    </>
  )
}
