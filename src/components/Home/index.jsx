import { h } from 'preact';
import styles from './Home.scss';

import Nav from '../Nav/';
import About from '../About/';
import Skills from '../Skills/';
import Work from '../Work/';
import BlogPosts from '../BlogPosts/';
import Contact from '../Contact';

const Home = () => (
    <div className="Home">
        <Nav />
        <header className={`flex align-center ${styles.Hero} ${styles.Landing}`}>
            <h1 className={styles.heading}>
                <span>Hi! &#128075;</span>
                <span>I'm James.</span>
                <span>I'm a Full Stack</span>
                <span>Web Developer.</span>
            </h1>
        </header>
        <div className={styles.siteContainer}>
            <section className={styles.innerWrap}>
                <About />
                <Skills />
                <Work />
                <BlogPosts />
                <Contact />
            </section>
        </div>
    </div>
);

export default Home;
