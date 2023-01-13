import { useState } from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/Bs'
import styles from './LikeButton.module.css'

export default function LikeButton() {
    const [si, setSi] = useState(false)
    return (
        <button className={styles.likeButton} onClick={() => setSi(!si)}>
            {si ?
                <BsSuitHeartFill size={30} color={'#2196f3'} /> :
                <BsSuitHeart size={30} color={'#2196f3'} />}


        </button>
    )
}