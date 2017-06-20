import { h } from 'preact';
import { Router } from 'preact-router';
import { connect } from 'preact-redux';

// Components
import Nav from './Nav/';
import Home from './Home/';
import Work from './WorkPage/';
import Blog from './BlogPage/';
import Post from './PostPage/';
// Style
import styles from './App.scss';

// const restoreScrollPos = (route) => {
//     console.debug('what');
//     // console.log('WHY IS THIS BEING CALLED');
//     const currentScrollPos = getState().scroll[route];
//     window.scrollTo(null, currentScrollPos);
// };

const App = () => (
    <div className={styles.App}>
        <Nav />
        <Router>
            <Home path='/' />
            <Work path='/work' />
            <Blog path='/blog' />
            <Post path='/blog/:postSlug' />
        </Router>
    </div>
);

export default connect(state => state)(App);
