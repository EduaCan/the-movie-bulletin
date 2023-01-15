import { useState } from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/Bs'
import { movieDetailsProps } from '../../interface/movie'
import { addFavouriteMovies } from '../../redux/movieSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import styles from './LikeButton.module.css'

export default function LikeButton({details}: movieDetailsProps) {
    const [si, setSi] = useState(false)
    const dispatch = useAppDispatch()

    
    const handleLikeButto = () => {
        dispatch(addFavouriteMovies(details))
    }

    
    return (
        <button className={styles.likeButton} onClick={handleLikeButto}>
            {si ?
                <BsSuitHeartFill size={30} color={'#2196f3'} /> :
                <BsSuitHeart size={30} color={'#2196f3'} />}
        </button>
    )
}