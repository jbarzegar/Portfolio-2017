import { h } from 'preact';
import styles from './WorkPiece.scss';

const WorkPiece = ({ name }) => (
    <div className={styles.WorkPiece}>
        <h1>Hello world</h1>
        <h2>{name}</h2>
    </div>
);

export default WorkPiece;
