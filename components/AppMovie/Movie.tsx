import Image from 'next/image'
import { useEffect, useState } from 'react'
import { movieDetailsProps } from '../../interface/movie'
import Rating from '../AppRating/Rating'
import styles from './Movie.module.css'


export default function Movie ({ details }: movieDetailsProps) {
    const [isFetching, setIsFetching] = useState(false)


    useEffect(()=> {
        setIsFetching(true)
    }, [])
    

    return (
    <div className={styles.movieContainer}>
        <div className={styles.movieDetails}>
            <h1>{details?.title}</h1>
            <Rating voteAverage={details?.vote_average}/>
            <p>{details?.overview.slice(0, 300)+ "..."}</p>
        </div>
        <div className={styles.imageContainer}>
        <Image className={isFetching ? styles.imageMovie : styles.imageMovieBefore} 
            src={details?.backdrop_path ? `https://image.tmdb.org/t/p/w1280${details?.backdrop_path}` : "/generic-poster.jpg"} 
            fill={true} alt={details?.title ? details.title : ""}
            />
        </div>
    </div>
    )
}
