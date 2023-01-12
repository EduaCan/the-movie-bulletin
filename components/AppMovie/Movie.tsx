
import Image from 'next/image'
import { movieDetailsProps, movieReduced } from '../../interface/movie'
import styles from './Movie.module.css'

export default function Movie ({ details }: movieDetailsProps) {
    
    return (
    <div className={styles.movieContainer}>
        <div className={styles.movieDetails}>
            <h1>{details?.title}</h1>
            <p>{details?.vote_average}</p>
            <p>{details?.overview}</p>
        </div>
        <div className={styles.imageContainer}>
            <Image className={styles.imageMovie} src={`https://image.tmdb.org/t/p/w1280${details?.backdrop_path}`} fill={true} alt={details?.title ? details.title : ""} />
        </div>
    </div>
    )
}