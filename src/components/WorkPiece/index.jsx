import { h } from 'preact';
import { connect } from 'preact-redux';
import WpContent from '../WpContent/';
import styles from './WorkPiece.scss';

const content = state => {
    return state.work[state.name];
};

const WorkPiece = (state) => (
    <div className={styles.WorkPiece}>
        { !state.work[state.name]
            ? ''
            : (
                <div>
                    <h2>{content(state).title.rendered}</h2>
                    <WpContent content={content(state).content.rendered} />
                </div>
            )
        }
    </div>
);

export default connect(state => state)(WorkPiece);
