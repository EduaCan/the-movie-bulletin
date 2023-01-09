import type { GetServerSidePropsContext } from "next";
import { movieDetailsProps } from "../../interface/movie";
import Tmdb from "../../services/tmdb.services"

export default function Movie ({details, cast}: movieDetailsProps) {

  return (
    <div>
      <h1>{details.id}</h1>

      </div>
  )
}

export async function getServerSideProps (context: GetServerSidePropsContext) {

  const {movie} = context.query

  const apiTmdb = new Tmdb()
  const details  = await apiTmdb.getMovieDetails(Number(movie))
  const cast = await apiTmdb.getMovieCredits(Number(movie))
  return {
    props: {
      details,
      cast
    },
  };
}

