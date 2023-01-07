import styles from './Nav.module.css'
import {GoSearch, GoCalendar} from 'react-icons/Go'
import {FaRegHeart} from 'react-icons/Fa'
import {SlHome} from 'react-icons/Sl'
import {AiOutlineFire} from 'react-icons/Ai'
import Link from 'next/link'

export default function Nav(){

    return (
        <>
        <div className={styles.container}>
        <Link href="/"><SlHome /></Link>
            <GoSearch />
        <Link href="/favourites"> <FaRegHeart /></Link>
        <Link href="/trending"><AiOutlineFire /></Link>
        <Link href="/upcoming"><GoCalendar/></Link>
        </div>
        </>
    )

}
