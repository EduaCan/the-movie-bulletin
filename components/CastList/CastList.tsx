import Image from "next/image"
import { castDetails, movieDetailsProps } from "../../interface/movie";
import styles from '../../components/CastList/CastList.module.css'


export default function CastList({ cast }: movieDetailsProps) {
    const imageSize = "w500"
    return (
    <div className={styles.container}>
          <h1>Cast</h1>
        <div className={styles.castContainer}>
        {cast?.length === 0 ? <h3>no results</h3> :
          cast?.map((member: castDetails) => {
            if (member.profile_path) {  //short-circuit?
              return (
                <div key={member.id} className={styles.cardContainer}  >
                  <Image className={styles.cardImage} src={`https://image.tmdb.org/t/p/${imageSize}${member.profile_path}`} alt={member.name} width={250} height={350} />
                  <p><b>{member.name}</b> <br /> {member.character}</p>
                </div>
              )
            }
          })
        }
        </div>
      </div>
    )
}