import styles from './Nav.module.css'
import { GoCalendar } from 'react-icons/Go'
import { SlHome, SlFire } from 'react-icons/Sl'
import { FaRegHeart } from 'react-icons/Fa'
import Link from 'next/link'

const links = [
  {
    label: <SlHome />,
    route: '/'
  },
  {
    label: <FaRegHeart />,
    route: '/favourites'
  },
  {
    label: <SlFire />,
    route: '/popular'
  },
  {
    label: <GoCalendar />,
    route: '/upcoming'
  }

]

export default function Nav() {

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
