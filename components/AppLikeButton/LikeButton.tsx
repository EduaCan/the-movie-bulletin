import React, { useEffect } from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { likeButtonProps } from '../../interface/movie'
import { addFavouriteMovies } from '../../redux/favouriteSlice'
import { useAppDispatch } from '../../store/hooks'
import styles from './LikeButton.module.css'


export default React.memo(function LikeButton({details, filteringFavourites, success }: likeButtonProps) {
    const dispatch = useAppDispatch()

    const handleLikeButto = () => {
        dispatch(addFavouriteMovies(details))
        success(details.id, details.title)
    }

    return (
        <button className={styles.likeButton} onClick={handleLikeButto}>

            {filteringFavourites(details.id).length !== 0 ?
                <BsSuitHeartFill size={30} color={'#2196f3'} /> :
                <BsSuitHeart size={30} color={'#2196f3'} />}
        </button>
    )
})