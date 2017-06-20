import { h } from 'preact';
import styles from './Contact.scss';

const Contact = () => (
    <div className={styles.Contact} id="Contact">
        <h2>Want to chat?</h2>
        <div className={`${styles.innerContainer} flex align-center justify-sb flex-wrap`}>
            <div className={styles.titleWrap}>
                <h3 className={styles.emailText}>
                    <a href="mailto:james.barzegar@gmail.com">
                        Send me an email
                    </a>
                </h3>
            </div>
            <section className={styles.socialList}>
                <h3>Or, Stalk my social media...</h3>
                <div className={`${styles.socials} flex`}>
                    <a href="https://twitter.com/Stealtheritz">
                        <i className="fa fa-twitter" />
                    </a>
                    <a href="https://github.com/jbarzegar">
                        <i className="fa fa-github" />
                    </a>
                    <a href="https://www.linkedin.com/in/james-barzegar-686a74106/">
                        <i className="fa fa-linkedin" />
                    </a>
                </div>
            </section>
        </div>
    </div>
);

export default Contact;
