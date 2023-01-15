import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { movieReduced, movieListReceivedProps } from "../../interface/movie";
import { useAppSelector } from "../../store/hooks";
import LikeButton from "../AppLikeButton/LikeButton";
import Rating from "../AppRating/Rating";
import styles from './MovieList.module.css'

export default function MovieList({ moviesToList, title }: movieListReceivedProps) {
    const router = useRouter()
    const { pathname } = router

    const {favouriteMovies} = useAppSelector((state) => state.favouriteMovies.favouriteMovies)

    const filteringFavourites = (id: number) => {
     return favouriteMovies.filter((movie: movieReduced)  =>{
         if (movie.id === id) {
           return true
         }})
 
    }



    const imageSize = "w500" //move to better place
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleContainer}>
                <div className={styles.mainTitle}>
                    <h1>{title}</h1>
                    {pathname === '/' &&
                        <Link href={title.split(' ')[0].toLowerCase()} className={styles.linkTitle}>Explore all</Link>
                    }
                </div>
                <p>{moviesToList.length} Items</p>
            </div>
            <div className={pathname === '/' ? styles.homeContainer : styles.container}>
                {moviesToList.length === 0 ? <h3>no results</h3> :
                    moviesToList.map((movie: movieReduced, index) => {
                        if (pathname === '/' && index >= 4) {
                            return
                        }
                        return (
                            <div key={movie.id} className={styles.cardContainer}  >
                                <LikeButton details={movie} filteringFavourites={filteringFavourites}/>
                                <Link href={`/movie/${movie.id}`} className={styles.linkImage}>
                                    <Image src={`https://image.tmdb.org/t/p/${imageSize}${movie.poster_path}`} alt={movie.title} fill={true} className={styles.cardImage} />
                                </Link>
                                <Link href={`/movie/${movie.id}`} >{movie.title.length >= 30 ? movie.title.slice(0, 28) + "..." : movie.title}</Link>
                                <Rating voteAverage={movie.vote_average} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

