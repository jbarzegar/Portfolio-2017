import { h, Component } from 'preact';
import { getState } from 'jumpstate';
import styles from './Home.scss';

import About from '../About/';
import Skills from '../Skills/';
import Work from '../Work/';
import BlogPosts from '../BlogPosts/';
import Contact from '../Contact';

class Home extends Component {
    componentWillMount() {
        window.scrollTo(null, getState().scroll['/']);
    }
    render() {
        return (
            <div className="Home">
                <header className={`flex align-center ${styles.Hero} ${styles.Landing} App-Hero`}>
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
    }
}

export default Home;
