
import Image from 'next/image'
import { movieDetailsProps } from '../../interface/movie'
import styles from './Movie.module.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/Ai'


export default function Movie ({ details }: movieDetailsProps) {

 const GetValoration = () => {
        
        const roundedNumber = Math.round(details?.vote_average / 2)
        const test = []
        for (let i = 0; i < 5; i++) {
            if (roundedNumber > i){
                test.push(<AiFillStar color={'2196f3'} size={25}/>)
            } else {test.push(<AiOutlineStar color={'2196f3'} size={25}/>)}
        }
     return <p>{test}</p>
    }
    
    return (
    <div className={styles.movieContainer}>
        <div className={styles.movieDetails}>
            <h1>{details?.title}</h1>
            <GetValoration />
            <p>{details?.overview.slice(0, 300)+ "..."}</p>
        </div>
        <div className={styles.imageContainer}>
            <Image className={styles.imageMovie} src={`https://image.tmdb.org/t/p/w1280${details?.backdrop_path}`} fill={true} alt={details?.title ? details.title : ""} />
        </div>
    </div>
    )
}