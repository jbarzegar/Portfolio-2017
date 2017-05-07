import { h } from 'preact';
import Router from 'preact-router';
// Components
import Home from './Home/';
import Nav from './Nav';
// Style
import styles from './App.scss';

const App = () => (
    <div className={styles.App}>
        <Nav />
        <Router>
            <Home path='/' />
        </Router>
    </div>
);

export default App;
