import Image from "next/image";
import Link from "next/link";
import movieRaw from "../../interface/movieRaw";
import Tmdb from "../../services/tmdb.services";
import styles from './MovieList.module.css'


export default function MovieList({ movies }: movieRaw) {
    const imageSize = "w500" //move to better place
    return (
        <>
            <div className={styles.container}>
                {movies.length === 0 ? <h3>no results</h3> :
                    movies.map((movie: movieRaw) => {
                        return (
                            <div key={movie.id} className={styles.cardContainer}  >
                            <Link  href={`/movie/${movie.id}`} className={styles.linkImage}>
                                <Image className={styles.cardImage} src={`https://image.tmdb.org/t/p/${imageSize}${movie.poster_path}`} alt={movie.original_title} width={250} height={350} />
                                
                            </Link>
                            <Link href={`/movie/${movie.id}`} >{movie.title.length >= 30 ? movie.title.slice(0, 30)+ "..." : movie.title}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const apiTmdb = new Tmdb()
    const { results } = await apiTmdb.getPopularMovies()

    return {
        props: {
            movies: results
        },
    };
}