import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/Bs'
import { movieDetailsProps } from '../../interface/movie'
import { addFavouriteMovies } from '../../redux/favouriteSlice'
import { useAppDispatch } from '../../store/hooks'
import styles from './LikeButton.module.css'


export default function LikeButton({details, filteringFavourites, success }: movieDetailsProps) {
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
}