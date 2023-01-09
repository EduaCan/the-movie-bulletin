import type { GetServerSidePropsContext } from "next";
import { movieDetailsProps } from "../../interface/movie";
import Tmdb from "../../services/tmdb.services"

export default function Movie ({details, casts}: movieDetailsProps) {

  return (
    <div>
      <h1>{details.id}</h1>

      </div>
  )
}

export async function getServerSideProps (context: GetServerSidePropsContext) {

  const {movie} = context.query

  const apiTmdb = new Tmdb()
  const detalles  = await apiTmdb.getMovieDetails(Number(movie))
  const casts = await apiTmdb.getMovieCredits(Number(movie))
  return {
    props: {
      detalles,
      casts
    },
  };
}

