import Image from "next/image";
import Link from "next/link";
import { movieReduced, movieListReceivedProps } from "../../interface/movie";
import styles from './MovieList.module.css'


export default function MovieList({ moviesToList }: movieListReceivedProps) {
    const imageSize = "w500" //move to better place
    return (
        <>
            <div className={styles.container}>
                {moviesToList.length === 0 ? <h3>no results</h3> :
                    moviesToList.map((movie: movieReduced) => {
                        return (
                            <div key={movie.id} className={styles.cardContainer}  >
                                <Link href={`/movie/${movie.id}`} className={styles.linkImage}>
                                    <Image src={`https://image.tmdb.org/t/p/${imageSize}${movie.poster_path}`} alt={movie.title} fill={true} />
                                </Link>
                                <Link href={`/movie/${movie.id}`} >{movie.title.length >= 30 ? movie.title.slice(0, 28) + "..." : movie.title}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}