
import styles from './Footer.module.css'
import { AiFillGithub } from 'react-icons/ai'


export default function Footer() {

    return (
        <div className={styles.container}>
            <a href='https://github.com/yebrai/the-movie-bulletin'> <AiFillGithub size={30}/></a>
            <p>© 2023 <a href="www.linkedin.com/in/ivangarciayebra">Ivan Yebra</a> & <a href="https://www.linkedin.com/in/eduard-canal/">Eduard Canal</a></p>
            <p> Built on top of Nextjs/Redux and TypeScript.</p>
            <p>Data provided by TMDb.</p>
            
        </div>
    )
}