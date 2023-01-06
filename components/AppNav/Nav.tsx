import styles from './Nav.module.css'
import {GoSearch, GoCalendar} from 'react-icons/Go'
import {FaRegHeart} from 'react-icons/Fa'
import {SlHome} from 'react-icons/Sl'
import {AiOutlineFire} from 'react-icons/Ai'
const Nav = () => {

    return (
        <>
        <div className={styles.container}>
            <SlHome />
            <GoSearch />
            <FaRegHeart />
            <AiOutlineFire />
            <GoCalendar/>
        </div>
        </>
    )

}

export default Nav