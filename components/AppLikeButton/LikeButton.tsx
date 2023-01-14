import { useState } from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/Bs'
import { movieDetails, movieDetailsProps } from '../../interface/movie'
import styles from './LikeButton.module.css'

export default function LikeButton({details}: movieDetailsProps) {
    const [si, setSi] = useState(false)
    
    let favouriteMovie: any;
    const handleLikeButto = () => {
        if (!favouriteMovie) {
            localStorage.setItem(details?.id, JSON.stringify(details))
        } else {
            favouriteMovie = JSON.parse(localStorage.getItem(details.id))
        console.log(favouriteMovie)}
    }

    
    return (
        <button className={styles.likeButton} onClick={handleLikeButto}>
            {!favouriteMovie ?
                <BsSuitHeartFill size={30} color={'#2196f3'} /> :
                <BsSuitHeart size={30} color={'#2196f3'} />}
        </button>
    )
}