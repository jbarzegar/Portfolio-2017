import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { Link } from 'preact-router';
import { Actions } from 'jumpstate';
import styles from './Work.scss';
import shade from '../../helpers/shade';

import Sidebar from '../Sidebar/';

class Work extends Component {
    state = {
        work: {
            content: null,
            class: 'hidden'
        }
    }
    constructor() {
        super();
        this.showSidebar = this.showSidebar.bind(this);
    }
    showSidebar(state) {
        Actions.openSidebar(state);
    }
    renderWorkCards(work) {
        const cardStyles = `background: linear-gradient(to top left, ${shade(work.brand_color, -0.15)}, ${work.brand_color});`;
        return (
            <div
                className={`flex align-all-center ${styles.card}`}
                style={cardStyles}
                onClick={() => this.showSidebar(work)}
            >
                <h4>{work.title.rendered}</h4>
            </div>
        );
    }
    render() {
        return (
            <div className={styles.Work} id="Work">
                <section className="pinnedWork">
                    <h2>What I'm plugging away at.</h2>
                    <h3>Keep in mind these are all personal projects, see my resume for professinal work</h3>
                    <section className={`flex justify-sb flex-wrap`}>
                        { Object.keys(this.props.work).slice(0, 2)
                                .map(el => this.renderWorkCards(this.props.work[el])) }
                    </section>
                </section>
                <section className="flex align-all-center">
                    <Link href='/work' className={styles.viewButton}>
                        View all work
                    </Link>
                </section>
                <Sidebar />
            </div>
        );
    }
}

export default connect(state => state)(Work);
