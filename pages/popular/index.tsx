
import MovieList from "../../components/AppMovieList/MovieList"
import { useAppSelector } from "../../store/hooks"
import Router from 'next/router';
import { NextSeo } from "next-seo";

export default function Popular() {

  const popularMovies = useAppSelector((state: any) => state.apiMovies.popularMovies)
  popularMovies.length === 0 && Router.push({
    pathname: '/',
  });

  return (
    <>
            <NextSeo
            title="Popular | TMBulletin"
            description="List of top movies"
            />
      <MovieList moviesToList={popularMovies} title={'Popular Movies'} />
    </>
  )
}
