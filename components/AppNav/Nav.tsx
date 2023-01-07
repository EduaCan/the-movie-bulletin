import styles from './Nav.module.css'
import {GoSearch, GoCalendar} from 'react-icons/Go'
import {FaRegHeart} from 'react-icons/Fa'
import {SlHome} from 'react-icons/Sl'
import {AiOutlineFire} from 'react-icons/Ai'
import Link from 'next/link'

const links = [
    {
      label: <GoSearch/>,
      route: '/'
    },
    {
      label: <FaRegHeart />,
      route: '/favourites'
    },
    {
      label: <AiOutlineFire />,
      route: '/trending'
    },
    {
        label: <GoCalendar/>,
        route: '/upcoming'
      }

  ]

export default function Nav(){

    return (
        <>
        <ul className={styles.container}>
          {links.map(({ label, route }) => {
            return (
              <li className={styles.icons} key={route}>
                <Link href={route}>{label}</Link>
              </li>
            )
          })}
        </ul>
        </>
    )

}
