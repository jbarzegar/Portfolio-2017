import { h } from 'preact';
import styles from './Contact.scss';

const Contact = () => (
    <div className={styles.Contact}>
        <h2>Want to chat?</h2>
        <div className={`${styles.innerContainer} flex align-center justify-sb flex-wrap`}>
            <div className={styles.titleWrap}>
                <h3 className={styles.email}>
                    Send me an email at...
                </h3>
                <h3 className={styles.emailText}>
                    <a href="">hello@jamescodes.io</a>
                </h3>
            </div>
            <h3 className={styles.divider}>Or...</h3>
            <section className={styles.socialList}>
                <h3>Stalk my social media...</h3>
                <div className={`${styles.socials} flex`}>
                    <i className="fa fa-twitter" />
                    <i className="fa fa-github" />
                    <i className="fa fa-linkedin" />
                </div>
            </section>
        </div>

    </div>
);

export default Contact;
