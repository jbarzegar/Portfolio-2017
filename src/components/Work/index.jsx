import { h } from 'preact';
import styles from './Work.scss';

const Work = () => (
    <div className={styles.Work}>
        <h2>What I'm plugging away at.</h2>
        <h3>Keep in mind these are all personal projects, see my resume for professinal work</h3>
        <section className={`flex justify-sb flex-wrap`}>
            <div className={`flex align-all-center ${styles.card}`}>
                <h4>YP_bot</h4>
            </div>
            <div className={`flex align-all-center ${styles.card}`}>
                <h4>YP_bot</h4>
            </div>
        </section>
    </div>
);

export default Work;
