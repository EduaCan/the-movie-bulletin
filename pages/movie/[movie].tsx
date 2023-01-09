import type { GetServerSidePropsContext } from "next";
import Image from "next/image";
import { castDetails, movieDetailsProps } from "../../interface/movie";
import Tmdb from "../../services/tmdb.services"
import styles from '../../components/AppMovieList/MovieList.module.css'


export default function Movie ({details, cast}: movieDetailsProps) {
  const imageSize = "w500" //move to better place
  return (
    <div>
      <h1>{details.id}</h1>
      {cast.length === 0 ? <h3>no results</h3> :
                    cast.map((member: castDetails) => {
                        return (
                            <div key={member.id} className={styles.cardContainer}  >
                                <Image className={styles.cardImage} src={`https://image.tmdb.org/t/p/${imageSize}${member.profile_path}`} alt={member.name} width={250} height={350} />
                            </div>
                        )
                    })
                }

      </div>
  )
}

export async function getServerSideProps (context: GetServerSidePropsContext) {

  const {movie} = context.query

  const apiTmdb = new Tmdb()
  const detailsResponse  = await apiTmdb.getMovieDetails(Number(movie))
  const {cast: castResponse} = await apiTmdb.getMovieCredits(Number(movie))

  const {adult, backdrop_path, belongs_to_collection, production_companies, production_countries, video, ...details} = detailsResponse  
  const cast = castResponse.map(({ id, name, popularity, profile_path, credit_id, character}: castDetails) => {
    return { id, name, popularity, profile_path, credit_id, character}
  })

  console.log("cast", cast)
  return {
    props: {
      details,
      cast
    },
  };
}

