import MovieList from "../../components/AppMovieList/MovieList"
import { useAppSelector } from "../../store/hooks"
import Router from 'next/router';

export default function Upcoming() {


  
  const upcomingMovies = useAppSelector((state) => state.apiMovies.upcomingMovies)
  upcomingMovies.length === 0 && Router.push({
    pathname: '/',
  });

  return (
    <>
      <MovieList moviesToList={upcomingMovies} title={'Upcoming Movies'} />
    </>
  )
}

