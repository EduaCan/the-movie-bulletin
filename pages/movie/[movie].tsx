import type { GetServerSidePropsContext } from "next";
import { castDetails, movieDetailsProps } from "../../interface/movie";
import Tmdb from "../../services/tmdb.services"
import styles from './Movie.module.css'
import CastList from "../../components/AppCastList/CastList";
import MovieSelected from "../../components/AppMovie/Movie";
import Overview from "../../components/AppOverview/Overview";
import { NextSeo } from "next-seo";



export default function Movie({ details, cast }: movieDetailsProps) {

  return (
    <div className={styles.movieMain}>
              <NextSeo
            title={`${details.title}`}
            description={`details of ${details.title}`}
            />
      <MovieSelected details={details} />
      <Overview details={details} />
      <CastList cast={cast} />
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

  const { movie } = context.query

  const apiTmdb = new Tmdb()
  const detailsResponse = await apiTmdb.getMovieDetails(Number(movie))
  const { cast: castResponse } = await apiTmdb.getMovieCredits(Number(movie))


  const { adult, belongs_to_collection, production_companies, production_countries, video, ...details } = detailsResponse
  const cast = castResponse.map(({ id, name, popularity, profile_path, credit_id, character }: castDetails) => {
    return { id, name, popularity, profile_path, credit_id, character }
  })

  return {
    props: {
      details,
      cast
    },
  };
}

