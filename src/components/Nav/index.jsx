import { h, Component } from 'preact';
import { Actions, getState } from 'jumpstate';
import { Link } from 'preact-router';
import styles from './Nav.scss';

const isMainRoute = () => window.location.pathname === '/';
const stopBrowserScroll = () => document.body.classList.add('no-scroll');
const letBrowserScroll = () => document.body.classList.remove('no-scroll');

document.addEventListener("scroll", () => {
    const mobileButton = document.querySelector(`.${styles.toggleNavButton}`);
    // If we're not in the main route just show the nav button
    if (!isMainRoute()) {
        return mobileButton.classList.remove(styles.hidden);
    }

    const el = document.querySelector('.App-Hero');
    // Check if you're in the header
    if (window.scrollY < (el.offsetTop + el.offsetHeight)) {
        // Add hidden class to the mobile button if it's not there
        mobileButton.classList.contains(styles.hidden)
            ? ''
            : mobileButton.classList.add(styles.hidden);
    } else {
        mobileButton.classList.remove(styles.hidden);
    }
});

class Nav extends Component {
    constructor() {
        super();

        this.toggleButton = this.toggleButton.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        if (!isMainRoute()) {
            return this.toggleNav.classList.remove(styles.hidden);
        }
    }
    handleClick() {
        const routes = getState().scroll;
        const currentPos = window.scrollY;
        routes[window.location.pathname] = currentPos;
        // Save current route position
        Actions.saveScrollPos(routes);
        this.toggleNav.classList.remove('is-active', styles.active);
        // Restore scroll
        letBrowserScroll();
    }
    toggleButton() {
        const classObj = this.toggleNav.classList;
        if (classObj.contains('is-active') && classObj.contains(styles.active)) {
            classObj.remove('is-active', styles.active);
            letBrowserScroll();
        } else {
            classObj.add('is-active', styles.active);
            stopBrowserScroll();
        }
    }
    render() {
        return (
            <nav className={`flex ${styles.Nav}`}>
                <button
                    className={`${styles.hidden} ${styles.toggleNavButton} hamburger hamburger--spin`}
                    ref={node => this.toggleNav = node}
                    onClick={this.toggleButton}
                >
                    <span className='flex align-all-center hamburger-box'>
                        <span className={`hamburger-inner ${styles.hamburgerInner}`} />
                    </span>
                </button>
                <div className={`flex flex-col justify-center ${styles.navOverlay}`}>
                    <ul>
                        <li>
                            <Link href='/' onClick={() => this.handleClick('/')}>About</Link>
                        </li>
                        <li>
                            <Link href='/work' onClick={() => this.handleClick('/work')}>Work</Link>
                        </li>
                        <li>
                            <a href={window.resumeEndpoint}>Resume</a>
                        </li>
                        <li>
                            <Link href='/blog' onClick={() => this.handleClick('/blog')}>Blog</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
