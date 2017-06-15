import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import styles from './Loader.scss';

const stopBrowserScroll = () => document.body.classList.add('no-scroll');
const letBrowserScroll = () => document.body.classList.remove('no-scroll');

stopBrowserScroll();

class Loader extends Component {
    componentWillUpdate() {
        if (this.props.posts !== {} && this.props.work !== {}) {
            letBrowserScroll();
        }
    }
    render() {
        return (
            <div className={`${styles.loader} flex align-all-center ${this.props.loader.open ? styles.showing : styles.hidden}`}>
                <span>Loading...</span>
            </div>
        );
    }
}

export default connect(state => state)(Loader);
