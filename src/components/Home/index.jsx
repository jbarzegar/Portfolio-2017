import { h, Component } from 'preact';
import { getState } from 'jumpstate';
import styles from './Home.scss';

import About from '../About/';
import Skills from '../Skills';
import Work from '../Work';
import Contact from '../Contact';

class Home extends Component {
    // Runs once the component is mounted
    componentDidMount() {
        const scrollPosition = getState().scroll;
        if (scrollPosition > 0) {
            document.body.scrollTop = scrollPosition;
        }
    }
    render() {
        return (
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
                        <Work />
                        <Contact />
                    </section>
                </div>
            </div>
        );
    }
}

export default Home;
