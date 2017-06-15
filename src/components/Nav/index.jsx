import { h } from 'preact';
import { Link } from 'preact-router/match';
import styles from './Nav.scss';

const Nav = () => (
    <nav className={`flex ${styles.Nav}`}>
        <ul className='flex'>
            <li>
                <a href='#About' className={styles.link}>About</a>
            </li>
            <li>
                <a href='#Skills' className={styles.link}>Skills</a>
            </li>
            <li>
                <a href='#Work' className={styles.link}>Work</a>
            </li>
            <li>
                <a href='#Contact' className={styles.link}>Contact</a>
            </li>
            <li>
                <Link href='/blog' className={styles.link}>Blog</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;
