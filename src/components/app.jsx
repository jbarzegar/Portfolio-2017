import { h } from 'preact';
import Router from 'preact-router';
// Components
import Home from './Home/';
import WorkPiece from './WorkPiece';
import Nav from './Nav';
// Style
import styles from './App.scss';

const App = () =>  (
    <div className={styles.App}>
        <Nav />
        <Router>
            <Home path='/' />
            <WorkPiece path='/work/:name' />
        </Router>
    </div>
);

export default App;
