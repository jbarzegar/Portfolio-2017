import { h } from 'preact';
import { connect } from 'preact-redux';
import { Actions } from 'jumpstate';
import styles from './WorkPage.scss';

// Preact components
import Sidebar from '../Sidebar/';

import shade from '../../helpers/shade';

const renderWorkCards = (work) => {
    const cardStyles = `background: linear-gradient(to top left, ${shade(work.brand_color, -0.15)}, ${work.brand_color});`;
    return (
        <div className={styles.cardWrap}>
            <div
                className={`flex align-all-center ${styles.card}`}
                style={cardStyles}
                onClick={() => showSidebar(work)}
            >
                <h4>{work.title.rendered}</h4>
            </div>
        </div>
    );
};

const showSidebar = work => Actions.openSidebar(work);

const WorkPage = ({ work }) => (
    <section className="WorkPage">
        <div className={`${styles.innerWrap} flex-col align-center`}>
            <h2>Oh hey look, all the work I've done... Go ahead take a look</h2>
            <div className={`${styles.cardWrap} flex flex-wrap justify-sb`}>
                { Object.keys(work).map(el => renderWorkCards(work[el])) }
            </div>
        </div>
        <Sidebar />
    </section>
);

export default connect(state => state)(WorkPage);
