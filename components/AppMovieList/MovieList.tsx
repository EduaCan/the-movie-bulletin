import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { movieReduced, movieListReceivedProps } from "../../interface/movie";
import { useAppSelector } from "../../store/hooks";
import LikeButton from "../AppLikeButton/LikeButton";
import Rating from "../AppRating/Rating";
import styles from './MovieList.module.css'
import toast, { Toaster } from "react-hot-toast";

export default function MovieList({ moviesToList, title }: movieListReceivedProps) {
    const router = useRouter()
    const { pathname } = router

    const { favouriteMovies } = useAppSelector((state) => state.favouriteMovies.favouriteMovies)

    const filteringFavourites = (id: number) => {
        return favouriteMovies.filter((movie: movieReduced) => movie.id === id)
    }

    const success = (id: number, title: string) => {
        if (filteringFavourites(id).length === 0) {
            toast(`${title} 
         has been added to favourite list`, { icon: "✔️", style: { background: '#2196f3', color: 'white' } });
        } else {
            toast(`${title} 
     Has been removed from favourite list`, { icon: "❌", style: { background: '#2196f3', color: 'white' } })
        }
    }

    const imageSize = "w500" //move to better place
    return (
        <div className={styles.wrapper}>
            <div><Toaster
                position="top-right"
            /></div>
            <div className={styles.titleContainer}>
                <div className={styles.mainTitle}>
                    <h1>{title}</h1>
                    {pathname === '/' &&
                        <Link href={title.split(' ')[1].toLowerCase()} className={styles.linkTitle}>Explore all</Link>
                    }
                </div>
                <p>{moviesToList.length} Items</p>
            </div>
            <div className={pathname === '/' ? styles.homeContainer : styles.container}>
                {moviesToList.map((movie: movieReduced, index) => {
                        if (pathname === '/' && index >= 4) {
                            return
                        }
                        return (
                            <div key={movie.id} className={styles.cardContainer}  >
                                <LikeButton details={movie} filteringFavourites={filteringFavourites} success={success} />
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

