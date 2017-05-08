import { h } from 'preact';
import styles from './Home.scss';

import About from '../About/';
import Skills from '../Skills';

const Home = () => (
    <div className="Home">
        <section className={`flex align-center ${styles.Hero} ${styles.Landing}`}>
            <header>
                <h1 className={styles.heading}>
                    <span>Hi! &#128075;</span>
                    <span>I'm James.</span>
                    <span>I'm a Full Stack</span>
                    <span>Web Developer.</span>
                </h1>
            </header>
        </section>
        <div className={styles.siteContainer}>
            <section className={styles.innerWrap}>
                <About />
                <Skills />
            </section>
        </div>
    </div>
);

export default Home;
