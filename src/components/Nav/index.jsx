import { h } from 'preact';
import { Link } from 'preact-router/match';
import styles from './Nav.scss';

const Nav = () => (
    <nav className={`flex ${styles.Nav}`}>
        <ul className='flex'>
            <li>
                <a href='#about' className={styles.link}>About</a>
            </li>
            <li>
                <a href='#skills' className={styles.link}>Skills</a>
            </li>
            <li>
                <a href='#work' className={styles.link}>Work</a>
            </li>
            <li>
                <a href='#contact' className={styles.link}>Contact</a>
            </li>
            <li>
                <Link link='/blog' className={styles.link}>Blog</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;
