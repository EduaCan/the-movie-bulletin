import type { GetServerSidePropsContext } from "next";
import Image from "next/image";
import { castDetails, movieDetailsProps } from "../../interface/movie";
import Tmdb from "../../services/tmdb.services"
import styles from '../../components/AppMovieList/MovieList.module.css'
import styles2 from './Movie.module.css'


export default function Movie({ details, cast }: movieDetailsProps) {
  const imageSize = "w500" //move to better place

  return (
    <div className={styles2.movieMain}>
      <div className={styles2.movieContainer}>
        <div className={styles2.movieDetails}>
          <h1>{details.title}</h1>
          <p>{details.vote_average}</p>
          <p>{details.overview}</p>
        </div>
        <div className={styles2.imageContainer}>
          <Image className={styles2.imageMovie} src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} fill={true} alt={details.title} />
        </div>
      </div>
      <div className={styles.container}>

        {cast.length === 0 ? <h3>no results</h3> :
          cast.map((member: castDetails) => {
            if (member.profile_path) {  //short-circuit?
              return (
                <div key={member.id} className={styles2.cardContainer}>
                <div className={styles2.castCointainerImage}  >
                  <Image src={`https://image.tmdb.org/t/p/${imageSize}${member.profile_path}`} alt={member.name} fill={true} />
                </div>
                  <p><b>{member.name}</b> as {member.character}</p>
                </div>
              )
            }
          })
        }
      </div>
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

