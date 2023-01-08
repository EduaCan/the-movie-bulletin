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
                            <div key={movie.id} >
                            <Link  href={`/movie/${movie.id}`} className={styles.card}>
                                <Image className={styles.cardImage} src={`https://image.tmdb.org/t/p/${imageSize}${movie.poster_path}`} alt={movie.original_title} width={250} height={350} />
                                
                            </Link>
                            <Link href={`/movie/${movie.id}`} >{movie.title}</Link>
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

    //Without service functs
    // const res = await fetch(
    //   `https://api.themoviedb.org/3/movie/popular?api_key=(SETKEYHERE)&language=en-US&page=1`
    // );
    // const {results} = await res.json()

    return {
        props: {
            movies: results
        },
    };
}