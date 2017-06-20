import { h } from 'preact';
import { connect } from 'preact-redux';
import { Actions } from 'jumpstate';
import styles from './Sidebar.scss';

import WpContent from '../WpContent/';

const stopBrowserScroll = () => document.body.classList.add('no-scroll');
const letBrowserScroll = () => document.body.classList.remove('no-scroll');

const closeSidebar = () => Actions.closeSidebar();
const handleEscape = event => console.log(event);

const Sidebar = ({ isOpen, content }) => {
    if (isOpen) {
        stopBrowserScroll();
    } else {
        letBrowserScroll();
    }
    return (
        <div
            className={`${styles.workSideBarWrap} ${isOpen ? styles.showing : styles.hidden }`}
        >
            <section
                className={styles.workBackgroundFilter}
                onClick={closeSidebar}
                onKeyUp={handleEscape}
                />
            <section className={styles.workSideBar}>
                <button onClick={closeSidebar} class={`${styles.closeButton} fa fa-times`} />
                {/* Load when content isn't null */}
                { content ? (
                    <div className={styles.contentWrap}>
                        <h2>{content.title.rendered}</h2>
                        <WpContent content={content.content.rendered} />
                        <button className={styles.viewButton}>View Live</button>
                    </div>
                ) : ''}
            </section>
        </div>
    );
};

export default connect(state => state.sidebar)(Sidebar);
